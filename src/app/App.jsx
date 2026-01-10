// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthPopup } from '@auth';
import { GlobalLayout, MainLayout, MinimalLayout, StandardLayout} from '@layout';
import { HomePage, ProductPage } from '@pages';

const AuthPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // navigate to Home page
  };

  return (
    <AuthPopup title="Sign Up" onButtonClick={goToHome} />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout Shell={MainLayout} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
