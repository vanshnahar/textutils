import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   // BrowserRouter,
//   Switch,
//   Route,
  
//   // useRouteMatch,
//   Router,
// } from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled ", "success")
      document.title = "TextUtils-light mode "
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#161F58';
      showalert("Dark mode is enabled ", "success")
      document.title = "TextUtils-dark mode "
      // setInterval(() => {
      //   document.title="TextUtils is best "
      // }, 1000);
      // setInterval(() => {
      //   document.title="Download     TextUtils "
      // }, 1500);

    }
  }

  const [alert , setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   setalert(null);
    // }, 2000);
  }

  return (
    <>
       {/* <Router>  */}

        <Navbar title="Textutil" about="about us" mode={mode} toggle={togglemode} />
        <Textform heading="Write here" alert={showalert} mode={mode} />
         <Alert alert="this is alert"/>
        {/* // <div className="container">
        /* <Switch>
        <About />
            <Route path="/About">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div> */}
      {/* </Router> */ }

     </> 
  );
}

export default App;
