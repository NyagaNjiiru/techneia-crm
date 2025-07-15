import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import checkConnection from './utils/checkConnection';

function App()
{
  useEffect(() =>
  {
    checkConnection();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <Navigate to = "/login" /> } />
        <Route path = "/login" element = { <Login /> } />
        <Route path = "/signup" element = { <Signup /> } />
        <Route path = "/dashboard" element = { <Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
