import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';
import Navbar from './componants/Navbar';
import { Order } from './componants/Order';
import Nomatch from './componants/Nomatch';
import { Profile } from './componants/Profile';
import { Auth } from './componants/Auth';
import  Login  from './componants/Login';
import { Signup } from './componants/Signup';
import Donate from './componants/Donate';
import Admin from './componants/Admin.js';

import User from './componants/User.js';

function App() {
  return (
    <div className="App">
    <Auth>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/donate' element={<Donate/>}/>
       
        <Route path='*' element={<Nomatch/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/User' element={<User/>}/>
      </Routes>
    </Auth>
    </div>
  );
}

export default App;
