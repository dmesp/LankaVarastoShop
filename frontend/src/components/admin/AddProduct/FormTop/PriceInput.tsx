import { AccentText, DataContainer, Input } from '../AddProductForm';

type PriceInputProps = {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
};

const PriceInput = ({ price, setPrice }: PriceInputProps) => {
  const handlePriceChange = (value: string) => {
    if (/^\d*\.?\d+$/.test(value) && parseFloat(value) >= 0) {
      setPrice(value);
    }
  };

  return (
    <DataContainer>
      <AccentText>Добавить товар</AccentText>
      <Input 
        type="text" 
        placeholder="Цена € / 100г" 
        value={price} 
        onChange={(e) => handlePriceChange(e.target.value)} 
      />
    </DataContainer>
  );
};

export default PriceInput;