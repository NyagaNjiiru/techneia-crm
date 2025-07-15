import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import checkConnection from './utils/checkConnection';

function App() {
  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path = "/login" element = { <Login /> } />
        <Route path = "/signup" element = { <Signup /> } />
      </Routes>
    </Router>
  );
}

export default App;
