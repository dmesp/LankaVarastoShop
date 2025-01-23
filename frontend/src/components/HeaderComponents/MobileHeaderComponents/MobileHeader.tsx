import React, { useState } from "react";
import styled from "styled-components";
import SearchField from '../SearchField';
import LanguageDropDown from '../LanguageDropDown';
import CheckboxFilter from './CheckBoxFilters'; // Import the CheckboxFilter component

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 15px;
  margin-bottom: 20px;
  border-radius: 0 0 20px 20px;
  background: ${({ theme }) => theme.appBgColor};
`;

const HeaderTop = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  max-width: 1000px;
  height: 60px;

  border-bottom: solid 2px;
  border-color: ${({ theme }) => theme.appBgColor};

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Updock", serif;
  font-size: 50px;
`;

const HeaderLeft = styled.div`
  ${flexCenter}
  width: 30%;
`;

const HeaderRight = styled.div`
  ${flexCenter}
  width: 30%;
`;

const LanguageChange = styled.div`
  ${flexCenter}
  width: 10px;
`;

const DesktopHeader = () => {
  return (
    <>
      <StyledHeader>
        <HeaderTop>
          <HeaderLeft>
          </HeaderLeft>
          <HeaderCenter>
            <p>LankaVarasto</p>
          </HeaderCenter>
          <HeaderRight>
            <LanguageChange>
              <LanguageDropDown />
            </LanguageChange>
          </HeaderRight>
        </HeaderTop>
        <HeaderBottom>
          <SearchField />
        </HeaderBottom>
      </StyledHeader>

    </>
  );
};

export default DesktopHeader;
