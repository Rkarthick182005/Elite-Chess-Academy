
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import Tournaments from './Tournaments';
import TournamentDetail from './TournamentDetail';
import Plans from './Plans';
import { AuthProvider } from './AuthContext';
import Admin from './Admin'; 

import About from './About';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetail />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} /> 
        </Routes>
        
      </div>
    </AuthProvider>
  );
};

export default App;