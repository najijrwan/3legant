// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthPopup } from '@auth';
import { HomePage } from '@pages';

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
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  );
};

export default App;
