import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState('')
  const [color, setColor] = useState('')

  let showAlert = (message, type) => {
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000) 
  }

  const colorMode = () =>  {
    if (mode === 'light'){
      setMode('green')
      document.body.style.backgroundColor = '#008000'
      showAlert("Green Mode Enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }

  const toggleMode = () =>  {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <><Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} colorMode = {colorMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <br />
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter Your Text To Analize" mode={mode}/>
          </Route>
        </Switch>
      {/* <About/> */}
      </div>
      {/* <Navbar/> */}
      </Router>
    </>
  );
}

export default App;
