import './App.css';
import Home from "./components/Home";
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar';

function App() {
  const [ isAuth, setIsAuth ] = useState(false);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
