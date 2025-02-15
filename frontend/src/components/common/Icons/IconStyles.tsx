import styled from 'styled-components';

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 
    'FILL' 0, 
    'wght' 250, 
    'GRAD' 200, 
    'opsz' 48;
  font-size: 30px;
  cursor: pointer;
`;

export const IconText = styled.div`
  font-size: 14px;
`;

export const CombinedIcon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${({ theme }) => theme.colorChangeAnimation};

  &:hover {
    color: red;
  }

  &:active {
    color: green;
  }
`;
