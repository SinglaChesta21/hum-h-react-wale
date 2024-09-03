import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="Text Analyzers" about="About Us"/>
      <div className="container-fluid" style={{backgroundImage:`url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')`}}>
      <TextForm heading="Enter your text here so, that I can ANALYZE it"/>
      </div>
    </>
  );
}

export default App;
