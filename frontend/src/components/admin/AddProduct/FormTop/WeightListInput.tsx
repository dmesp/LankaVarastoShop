import {useState} from "react";
import {AccentText, DataContainer} from '../AddProductForm';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0px 20px;
`;

const InputWrapper = styled.div`
  margin-top: 20px;
`;

const WeightRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const Input = styled.input.attrs<{ width?: string }>((props) => ({
  style: { width: props.width || "100%" }
}))`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ControlArea = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin-top: 5px;
`;

const ControlButton = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #ccc;
  &:hover {
    background: #f0f0f0;
  }
`;

const TotalWeight = styled.p`
  color: green;
`;

type WeightListProps = {
  weightList: { weight: string; quantity: string }[];  
  setWeightList: React.Dispatch<React.SetStateAction<{ weight: string; quantity: string }[]>>;  
};

const WeightListInput = ({
  weightList,
  setWeightList,
  }: WeightListProps) => {

  const totalWeight = weightList.reduce(
    (sum, item) => sum + (parseFloat(item.weight) * parseFloat(item.quantity) || 0),
    0
  );

  const handleChange = (
    index: number,
    field: "weight" | "quantity",
    value: string
  ) => {
    setWeightList((prevweightList) =>
      prevweightList.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addWeight = () => {
    setWeightList((prevweightList) => [
      ...prevweightList,
      { weight: "", quantity: "" },
    ]);
  };

  const removeWeight = () => {
    if (weightList.length > 1) {
      setWeightList((prevweightList) => prevweightList.slice(0, -1));
    }
  };

  return (
        <DataContainer>
        <AccentText>Вариации веса</AccentText>
        <TotalWeight >
          Общий вес: {totalWeight} г
        </TotalWeight>

        {weightList.map((item, index) => (
          <div key={index}>
            <WeightRow>
              <Input
                type="number"
                placeholder="Вес (г)"
                value={item.weight}
                onChange={(e) => handleChange(index, "weight", e.target.value)}
                width="45%"
              />
              <Input
                type="number"
                placeholder="Количество"
                value={item.quantity}
                onChange={(e) => handleChange(index, "quantity", e.target.value)}
                width="45%"
              />
            </WeightRow>

            {index === weightList.length - 1 && (
              <ControlArea>
                <ControlButton onClick={addWeight} style={{ borderRight: "none" }}>
                  ➕ Добавить
                </ControlButton>
                <ControlButton onClick={removeWeight}>➖ Удалить</ControlButton>
              </ControlArea>
            )}
          </div>
        ))}
      </DataContainer>
  );
};

export default WeightListInput;
