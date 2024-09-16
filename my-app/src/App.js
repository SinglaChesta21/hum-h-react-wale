import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
      <Navbar title="Text Analyzers" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container-fluid" style={{backgroundImage:`url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')`}}>
      <TextForm heading="Enter your text here so, that I can ANALYZE it"/>
      </div>
    </>
  );
}

export default App;
