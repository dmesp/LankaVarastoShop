import { useState, useRef } from "react";
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

const FiberRow = styled.div`
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

const TotalPercentage = styled.p<{ over: boolean }>`
  color: ${(props) => (props.over ? "red" : "green")};
`;

type Fiber = {
  name: string;
  percentage: string;
};

type CompositionProps = {
  composition: Fiber[];
  setComposition: React.Dispatch<React.SetStateAction<Fiber[]>>;
};

const CompositionInput = ({ composition, setComposition }: CompositionProps) => {
  const totalPercentage = composition.reduce(
    (sum, fiber) => sum + (parseFloat(fiber.percentage) || 0),
    0
  );

  const handleChange = (index: number, field: "name" | "percentage", value: string) => {
    setComposition((prevFibers) =>
      prevFibers.map((fiber, i) =>
        i === index ? { ...fiber, [field]: field === "percentage" ? Math.min(100, Math.max(0, parseFloat(value) || 0)).toString() : value } : fiber
      )
    );
  };

  const addFiber = () => {
    if (totalPercentage < 100 && composition.length < 5) {
      setComposition([...composition, { name: "", percentage: "" }]);
    }
  };

  const removeFiber = () => {
    if (composition.length > 1) {
      setComposition((prevFibers) => prevFibers.slice(0, -1));
    }
  };

  return (
    <Container>
      <InputWrapper>
        <TotalPercentage over={totalPercentage > 100}>
          Общий процент: {totalPercentage}%
        </TotalPercentage>

        {composition.map((fiber, index) => (
          <div key={index}>
            <FiberRow>
              <Input
                type="text"
                placeholder="Состав"
                value={fiber.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                width="70%"
              />
              <Input
                type="number"
                placeholder="%"
                value={fiber.percentage}
                onChange={(e) => handleChange(index, "percentage", e.target.value)}
                width="30%"
              />
            </FiberRow>
            {index === composition.length - 1 && (
              <ControlArea>
                <ControlButton onClick={addFiber} style={{ borderRight: "none" }}>
                  ➕ Добавить
                </ControlButton>
                <ControlButton onClick={removeFiber}>➖ Удалить</ControlButton>
              </ControlArea>
            )}
          </div>
        ))}
      </InputWrapper>
    </Container>
  );
};

export default CompositionInput;
