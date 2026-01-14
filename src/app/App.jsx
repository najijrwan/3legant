// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthPopup } from '@auth';
import { GlobalLayout, MainLayout, MinimalLayout, StandardLayout } from '@layout';
import { HomePage, AuthPage, ProductPage } from '@pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout Shell={MainLayout} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
