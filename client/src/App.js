import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './redux/store'; // Assuming your Redux store is in a file named 'store.js'

function App() {
  return (
    <div className="App">
      <Provider store={store}>  {/* Wrap the application with the Provider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
