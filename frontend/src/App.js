import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About'; // Example additional page
import withLoader from './components/withLoader'; // Adjust the path if needed
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Contactus from './pages/contactus';
import Home from './pages/homepage';
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

            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
      <div style={{ marginTop: "8%" }}>
        <Footer /></div>
    </Router>
  );
}

export default App;
