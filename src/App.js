import './App.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'

import Login from './components/Login';
import Home from './pages/Home';
import Register from './components/Register';
import { UserConextProvider } from './UserContext';
import PostPage from './pages/PostPage';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <UserConextProvider>
      <Header />

      <Routes>          
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/create' element={<CreatePost />} />

        <Route path='/post/:id' element={<PostPage/>} />
        
    </Routes>
      </UserConextProvider>
  );
}

export default App;
