// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light') //Whether DarkMode is 
  //enabled or not...
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title='TextUtils - Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title='TextUtils - Light Mode'
    } 
  }
  return (
    <>
    {/* In React JS, In a function, everything must be written within "<> </>" */}
{/* <Navbar title = "TextUtils" AboutText = "About TextUtils"/> */}
{/* <Navbar/> */}
<Router>
<Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
  <Routes>
    <Route exact path = "/about" element = {<About/>}/>
    <Route exact path = "/" element = {<Textform showAlert = {showAlert} heading = "Enter the text to analyse below" mode = {mode}/>}/>
  </Routes>

</div>
</Router>
{/* <Textform showAlert = {showAlert} heading = "Enter the text to analyse below" mode = {mode}/> 
              showAlert is creating problem when textbuttons are green colour doesn't appears*/}
{/* <About/> */}

    {/* Here, title and AboutText are props and Navbar is our Component.
        So, basically here we are changing the props according to our requirements  */}
    </>
  );
}

export default App;
