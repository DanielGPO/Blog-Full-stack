import './App.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'

import Login from './components/Login';
import Home from './pages/Home';
import Register from './components/Register';

function App() {
  return (
    <>
      <Header />

      <Routes>          
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
      </>
  );
}

export default App;
