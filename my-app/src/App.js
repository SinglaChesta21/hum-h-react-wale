import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('#6c757d');


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has enabled", "success");
      document.title = 'light mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enabled", "success");
      document.title = 'dark mode';


    }
  }

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
      setMode('selectedColor');
      document.body.style.backgroundColor = selectedColor;
  }
  return (
    <>
      <Navbar title="Text Analyzers" about="About Us" mode={mode} toggleMode={toggleMode} onColorChange={handleColorChange}/>
      <Alert alert={alert} />
      <div className="container-fluid" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')` }}>
        <TextForm showAlert={showAlert} heading="Enter your text here so, that I can ANALYZE it" />
      </div>
    </>
  );
}

export default App;
