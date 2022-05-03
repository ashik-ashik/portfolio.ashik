import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import HeroBanner from './Components/Home/HeroBanner/HeroBanner';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
