import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const toggleMode = () =>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#18234b';
  //     showAlert("Dark mode has been enabled", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  const [theme, setTheme] = useState('light');
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.body.style.backgroundColor = '#373b3e';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else if (newTheme === 'primary') {
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue mode has been enabled", "success");
      document.title = 'TextUtils - Blue Mode';
    } else if (newTheme === 'success') {
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled", "success");
      document.title = 'TextUtils - Green Mode';
    } else {
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
    {/* <Router> */}
  {/* <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} /> */}
   {/* <Navbar title="Textutils" aboutText="About" theme={theme} toggleTheme={toggleTheme}/> */}
  {/* <Alert alert={alert}/> */}
  <div className="container my-5"> 
    
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
    {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme}/>*/}
    
    {/* <About/> */}
  </div>
  {/* </Router> */}

      <Router>
        <Navbar title="Textutils" aboutText="About" theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
