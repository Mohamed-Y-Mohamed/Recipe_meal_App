import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import withLoader from './components/withLoader';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Contactus from './pages/contactus';
import Home from './pages/homepage';
import Profile from './pages/profile';
import Chat from './pages/Chat';
import Signin from './pages/Signin';
import Signup from './pages/signup';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        <NavBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <Routes>
            <Route path="/" element={withLoader(Home)()} />
            <Route path="/contactus" element={withLoader(Contactus)()} />
            <Route path="/home" element={withLoader(Home)()} />
            <Route path="/about" element={withLoader(About)()} />
            <Route path="/profile" element={withLoader(Profile)()} />
            <Route path="/Chat" element={withLoader(Chat)()} />
            <Route path="/Signin" element={withLoader(Signin)()} />
            <Route path="/Signup" element={withLoader(Signup)()} />

          </Routes>
        </div>
      </div>
      <Footer />

    </Router>
  );
}

export default App;
