'use client'; // Ensure the component is only rendered on the client

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 300px;
  position: relative;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.appBgColor};
  font-size: 24px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 10px 20px 10px 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 16px;
  background-color: #fff;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

const RecentSearches = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  max-height: 200px;
  overflow-y: auto;
  background: ${({ theme }) => theme.appBgColor};

  border-radius: 20px;
  padding: 10px;
  z-index: 10;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const SearchItem = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DeleteIcon = styled.span`
  color: red;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: darkred;
  }
`;

const SearchField: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false); 
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]') as string[];
      setRecentSearches(savedSearches);
    }
  }, [isClient]);

  const handleSearch = useCallback(() => {
    if (query) {
      const updatedSearches = [query, ...recentSearches.filter((search) => search !== query)].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      setRecentSearches(updatedSearches);
      router.push(`/search-results?query=${query}`);
    }
  }, [query, recentSearches, router]);

  const handleSearchItemClick = useCallback((search: string) => {
    setQuery(search);
    handleSearch();
  }, [handleSearch]);

  const handleDeleteSearch = useCallback((search: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Это предотвращает срабатывание клика по родительскому элементу
    const updatedSearches = recentSearches.filter((item) => item !== search);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    setRecentSearches(updatedSearches);
  }, [recentSearches]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFocus = () => setIsSearchActive(true);
  const handleBlur = () => setTimeout(() => setIsSearchActive(false), 100);

  if (!isClient) return null;

  return (
    <SearchWrapper>
      <SearchIcon className="material-icons">search</SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <RecentSearches isVisible={isSearchActive}>
        {recentSearches.length > 0 ? (
          recentSearches.map((search, index) => (
            <SearchItem key={index} onClick={() => handleSearchItemClick(search)}>
              {search}
              <DeleteIcon onClick={(e) => handleDeleteSearch(search, e)}>×</DeleteIcon>
            </SearchItem>
          ))
        ) : (
          <div>Нет недавних поисков</div>
        )}
      </RecentSearches>
    </SearchWrapper>
  );
};

export default SearchField;
