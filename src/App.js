import { UserProvider } from '../src/context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Submit from './pages/Submit';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/submit' element={<Submit />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
