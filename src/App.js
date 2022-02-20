import './css/App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

// Importing the the corresponding elements from react-router-dom (this is external package) to not to reload page
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Defining the mode 
  const [mode, setMode] = useState('light')

    // Defining the default alert state to show alert to the user first value be null and it will be handle on the alert.js
  const [alert, setAlert] = useState(null)

  // Defining the showalert function to change the message and the type of the alert state
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // After showing the alert to the user the function setTimeout call the setalert (update state of alert) can set the alert state to be null after 2 seconds
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // Defining the showmode function to manuplate the dark and light mode and pass to the components
  const showMode = () => {
    if (mode === 'light') {
      // Changing the mode state to dark
      setMode('dark')
      document.body.style.backgroundColor = '#000000'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success')
      // document.title = 'TextUtils-DarkMode'
    }
    else {
      // Changing the mode state to dark
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled', 'success')
      // document.title = 'TextUtils-LightMode'
    }
  }

  return (
    // You must be wrap the routes and the route in the Router tag
    <Router>
      <Navbar title="TextUtils" about="About Us" contact="Contact Us" mode={mode} showMode={showMode} />
      <Alert alert={alert} />
      <Routes>
      {/* exact means the url path match to the exact path */}
      {/* /user --> when the endpoint is not defined on your path and exact is not set then react will match the /user/id or elsewhere start with /user/something */}
      <Route exact path='/' element={<TextForm heading="Try TextUtils - Text Manipulator" mode={mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About mode={mode}/>} />
      </Routes>
    </Router>
  );
}
export default App;
