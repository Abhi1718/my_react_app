import './css/App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const showMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#000000'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils-DarkMode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils-LightMode'
    }
  }

  return (
    // <Router>
    //   <Navbar title="TextUtils" about="About Us" contact="Contact Us" mode={mode} showMode={showMode} />
    //   <Alert alert={alert} />
    //   <Routes>
    //   <Route path='/' element={<TextForm heading="Enter the text below to analyse" mode={mode} showAlert={showAlert} />} />
    //     <Route path='/about' element={<About/>} />
    //   </Routes>
    // </Router>
    <>
      <Navbar title="TextUtils" about="About Us" contact="Contact Us" mode={mode} showMode={showMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text below to analyse" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}
export default App;
