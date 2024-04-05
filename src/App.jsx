import { useState } from 'react';
import './App.css';
import SignUp from './pages/signup/SignUp';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <SignUp />
      </Router>
    </>
  );
}

export default App;
