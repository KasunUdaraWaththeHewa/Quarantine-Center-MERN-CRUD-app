import React from 'react'
import './App.css';

import  './components/NavBar.css';
import NavBar from './components/NavBar';

import ContactUs from './ContactUs';
import './ContactUs.css';

import Footer from './components/Footer';
import './components/Footer.css';

import Home from './Home';

import AdminPanel from './AdminPanel';
import './AdminPanel.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AdminPanel/>
    </div>
  );
}

export default App;
