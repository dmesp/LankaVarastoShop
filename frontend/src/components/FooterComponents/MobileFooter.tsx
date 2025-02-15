'use client';

import styled from 'styled-components';
import Icons from '../common/Icons/NavIcons';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: min-content;
  padding: 5px;
  background-color: #f8f9fa;
  position: sticky;
  bottom: 0;

  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
  z-index: 10; /* Обеспечивает, что футер будет поверх всех элементов */
`;

const MobileFooter = () => {
  return (
    <FooterWrapper>
      <Icons size="28px" /> {/* Устанавливаем размер иконок для мобильных устройств */}
    </FooterWrapper>
  );
};

export default MobileFooter;