'use client';

import React from 'react';
import AddProduct from '@/components/admin/AddProduct/AddProductForm';
import { GlobalStyles } from '@/styles/globalstyle';
import { themes, ThemeNames } from '@/styles/themes';

const AdminPage = () => {
    return (
      <>              
        <GlobalStyles />
        <AddProduct />
      </>
    );
  };
  
export default AdminPage;