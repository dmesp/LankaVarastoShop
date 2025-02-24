import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../../../contexts/LanguageContext";

interface FilterCategory {
  title: string;
  options: string[];
}

interface Translations {
  WelcomePage: {
    Filter: {
      Categories: FilterCategory[];
    };
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 200px;
  padding: 20px;
  border-radius: 30px;
  gap: 30px;


  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    max-height: fit-content;
    border: solid 2px;
    border-color: ${({ theme }) => theme.appBgColor};
    border-radius:  0px 30px 30px 0px;
    gap: 40px;
    padding: 30px;
    border-left: none;
    
    label {
      font-size: 18px;
    }
    
    div {
      font-size: 20px;
    }
  }
`;

const Category = styled.div``;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
`;

const Options = styled.div`
  margin-left: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CustomCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  display: inline-block;
  background: ${({ checked, theme }) =>
    checked ? theme.appBgColor || "blue" : theme.bgColor || "white"};
  border: 2px solid ${({ theme }) => theme.appBgColor || "gray"};
  border-radius: 20px;
  transition: all 0.10s linear;

  &:after {
    content: "";
    display: ${({ checked }) => (checked ? "block" : "none")};
    width: 1px;
    height: 1px;
    background: ${({ theme }) => theme.appBgColor};
    position: relative;
    top: 3px;
    left: 3px;
    border-radius: 2px;
  }
`;

const CheckboxLabel = styled.span`
  color: ${({ theme }) => theme.textPrimary || "black"};
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100%;
  height: 50px;
  border-radius: 15px;

  border-color: ${({ theme }) => theme.appBgColor};
  background: ${({ theme }) => theme.appBgColor70};

  &:hover {
   background: ${({ theme }) => theme.appBgColor};
  }
`;

const CheckboxFilter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { translations } = useLanguage() as { translations: Translations };

  const handleCheckboxChange = (option: string) => {
    setSelectedFilters((prev) => {
      const isSelected = prev.includes(option);
      const updatedFilters = isSelected
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      console.log("Selected filters:", updatedFilters.join(", "));
      return updatedFilters;
    });
  };

  return (
    <Container>
      {translations.WelcomePage.Filter.Categories.map((filter, index) => (
        <Category key={index}>
          <Title>{filter.title}</Title>
          <Options>
            {filter.options.map((option, idx) => {
              const isChecked = selectedFilters.includes(option);
              return (
                <Label key={idx}>
                  <HiddenCheckbox
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <CustomCheckbox checked={isChecked} />
                  <CheckboxLabel>{option}</CheckboxLabel>
                </Label>
              );
            })}
          </Options>
        </Category>
      ))}
      <SubmitButton>
        <p>Search</p>
      </SubmitButton>
    </Container>
  );
};

export default CheckboxFilter;