import React, { useState } from "react";
import styled from "styled-components";

interface FilterCategory {
  title: string;
  options: string[];
}

const filters: FilterCategory[] = [
  // Your filter categories here
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileFilterButton = styled.button`
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileModal = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-height: 80%;
  padding: 20px;
  position: relative;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;



const CheckboxFilter: React.FC<{ isOpen: boolean, toggleFilter: () => void }> = ({ isOpen, toggleFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);


  return (
    <Container>
      <FilterWrapper></FilterWrapper>

      {isOpen && (
        <ModalOverlay onClick={toggleFilter}>
          <MobileModal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={toggleFilter}>х</CloseButton>
            <p>вывы</p>
          </MobileModal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CheckboxFilter;
