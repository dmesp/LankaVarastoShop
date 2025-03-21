import { AccentText, DataContainer, StyledTop } from './AddProductForm';
import LanguageSelector from './LanguageSelector';
import WeightListInput from './FormTop/WeightListInput';
import PriceInput from "./FormTop/PriceInput"
import ColorSelector from "./FormTop/ColorSelector"

type FormTopProps = {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  categoryColors: string[];  
  setCategoryColors: React.Dispatch<React.SetStateAction<string[]>>; 
  selectedLanguages: string[];
  setSelectedLanguages: (languages: string[]) => void;
  weightList: { weight: string; quantity: string }[];  
  setWeightList: React.Dispatch<React.SetStateAction<{ weight: string; quantity: string }[]>>;  
};

const FormTop = ({
  price,
  setPrice,
  categoryColors,
  setCategoryColors,
  selectedLanguages,
  setSelectedLanguages,
  weightList,
  setWeightList
}: FormTopProps) => {
  return (
    <StyledTop>
      <PriceInput 
        price={price} 
        setPrice={setPrice}
      />
      <ColorSelector 
        categoryColors={categoryColors}
        setCategoryColors={setCategoryColors}
      />
      <WeightListInput
        weightList={weightList}
        setWeightList={setWeightList}
      />
      <DataContainer>
        <AccentText>Выберите язык</AccentText>
        <LanguageSelector 
          selectedLanguages={selectedLanguages} 
          setSelectedLanguages={setSelectedLanguages} 
        />
      </DataContainer>
    </StyledTop>
  );
};

export default FormTop;