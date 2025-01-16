// app/page.tsx или pages/index.tsx
import React from 'react';
import App from './_app';
import StyledApp from '@/components/StyledApp'; // Импортируем StyledApp, который является основным компонентом

const Home = () => {
  return <App />;
};

export default Home;
