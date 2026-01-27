// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalLayout, MainLayout, MinimalLayout, StandardLayout } from '@layout';
import { HomePage, AuthPage, ProductPage } from '@pages';
import { ProductProvider } from '@product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout Shell={MainLayout} />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/product"
            element=
            {
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            }
          />
        </Route>

        <Route path="/auth" element={<AuthPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
