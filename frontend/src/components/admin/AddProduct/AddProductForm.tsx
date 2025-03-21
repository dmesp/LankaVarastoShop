"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'; 
import makeRequest from '@/utils/requestHandler';
import FormTop from './FormTop';


import CompositionInput from './CompositionInput';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  box-sizing: border-box; 
  margin: 0px auto;
  padding: 20px;
  gap: 10px;
  background:rgb(207, 207, 207);

  @media (max-width: 830px) {
    width: 100vw;
  }
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  @media (max-width: 830px) {
    width: 100%;
  }
`;

const DataContainer = styled.div`
  background: white;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.76);
`

const FormCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AccentText = styled.p`
  font-size: x-large;

`;

const SecondaryText = styled.p`
  font-size: large;
`;

 const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; 

  @media (max-width: 830px) {
    font-size: 18px;
    height: 50px;
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

const LocaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.76);
`;

const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  justify-content: space-between;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 25px;
  font-size: large;
  width: 45%;

  @media (max-width: 830px) {
    height: 35px;
    font-size: 20px;
    border: solid 2px rgba(231, 231, 231, 0.88);
    border-radius: 10px;
`;

const AddProduct = () => {
  const router = useRouter();

  const [resMessage, setResMessage] = useState('');

  const [names, setNames] = useState<{ [key: string]: string }>({});
  const [price, setPrice] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [categoryColors, setCategoryColors] = useState<string[]>([]);
  const [сomposition, setComposition] = useState([{ name: "", percentage: "" }]);
  const [extraColors, setExtraColors] = useState<{ [key: string]: string }>({});
  const [weightList, setWeightList] = useState<{ weight: string; quantity: string }[]>([
    { weight: "", quantity: "" },
  ]);

  const handleNameChange = (lang: string, value: string) => {
    setNames((prev) => ({ ...prev, [lang]: value }));
  };
  const handleColorChange = (lang: string, value: string) => {
    setExtraColors((prev) => ({ ...prev, [lang]: value }));
  };

  const handleSubmit = async () => {
    setResMessage('Добавление...');

    const datas = {
      names,
      price: parseFloat(price),
      extraColors: setCategoryColors,
      searchextraColors: extraColors,
    };

    try {
      const response = await makeRequest('products', 'POST', datas);
      if (response.resdata) {
        setResMessage('Товар добавлен!');
        setTimeout(() => router.push('/admin'), 2000);
      }
    } 
    catch (error) {
      setResMessage(error.message);
    }
  };

  return (
    <FormWrapper>
      <FormTop
        price={price}
        setPrice={setPrice}
        categoryColors={categoryColors}
        setCategoryColors={setCategoryColors}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
        weightList={weightList}
        setWeightList={setWeightList}
      />

      <FormCenter>
        {selectedLanguages.map((lang, index) => (
          <LocaleContainer key={index}>
            <AccentText>Язык: {lang}</AccentText>
            <Input 
              type="text" 
              placeholder={`Название на ${lang}`} 
              value={names[lang] || ""} 
              onChange={(e) => handleNameChange(lang, e.target.value)} 
            />
            <Input 
              type="text" 
              placeholder={`Цвет на ${lang} для поиска. Например White Red`} 
              value={extraColors[lang] || ""} 
              onChange={(e) => handleColorChange(lang, e.target.value)} 
            />            
            <CompositionInput
              сomposition={сomposition}
              setComposition={setComposition}
            />
          </LocaleContainer>
        ))}
      </FormCenter>
      

      {resMessage && Message}
      <Button onClick={handleSubmit}>Добавить</Button>
    </FormWrapper>
  );
};

export default AddProduct;
export { AccentText, DataContainer, Message, CheckboxContainer, CheckboxLabel, StyledTop, Input };