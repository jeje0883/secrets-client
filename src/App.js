import { UserProvider } from '../src/context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
           <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
