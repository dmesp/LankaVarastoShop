import { AccentText, DataContainer, CheckboxContainer, CheckboxLabel} from '../AddProductForm';

type ColorSelectorType = {
  categoryColors: string[];
  setCategoryColors: React.Dispatch<React.SetStateAction<string[]>>; 
}

const popularColors = [
  "Белый", "Черный", "Серый", "Красный", "Синий", "Зеленый", "Желтый", "Розовый",
  "Фиолетовый", "Оранжевый", "Коричневый", "Бирюзовый"
];

const ColorSelector = ({ categoryColors, setCategoryColors }: ColorSelectorType) => {

  const handleSColorChange = (color: string) => {
    setCategoryColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <DataContainer>
      <AccentText>Цвет пряжи</AccentText>
      <CheckboxContainer>
        {popularColors.map((color) => (
          <CheckboxLabel key={color}>
            <input
              type="checkbox"
              value={color}
              checked={categoryColors.includes(color)}
              onChange={() => handleSColorChange(color)}
            />
            {color}
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
    </DataContainer>
  );
};

export default ColorSelector;