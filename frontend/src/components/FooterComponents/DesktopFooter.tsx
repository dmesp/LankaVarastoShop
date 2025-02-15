'use client';

import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.appBgColor};
  width: 100%;
  height: fit-content;
  min-height: 100px;
  margin-top: 50px;
`;

const DesktopFooter = () => {
  return (
    <FooterWrapper>
      <div>© 2025 LankaVarasto Oy</div>
      <div>Created by ----</div>
      <div>Yhteystiedot ----</div>
    </FooterWrapper>
  );
};

export default DesktopFooter;