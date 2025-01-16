import React from 'react';
import { Icon, IconText, CombinedIcon } from'./IconStyles';
import styled from "styled-components";

const HideOnWideScreen = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    display: none;
  }
`;

const Icons = () => {
  return (
    <>
      <HideOnWideScreen>
        <CombinedIcon>
            <Icon>menu</Icon>
            <IconText>Menu</IconText>
          </CombinedIcon>
      </HideOnWideScreen>
      <CombinedIcon>
        <Icon>account_circle</Icon>
        <IconText>Log In</IconText>
      </CombinedIcon>
      <CombinedIcon>
        <Icon>favorite</Icon>
        <IconText>Liked</IconText>
      </CombinedIcon>
      <CombinedIcon>
        <Icon>shopping_cart</Icon>
        <IconText>Cart</IconText>
      </CombinedIcon>
    </>
  );
};

export default Icons;