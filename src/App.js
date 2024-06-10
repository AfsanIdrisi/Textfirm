import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [theme,changeTheme]=useState({
    backgroundColor:"white",
    color:"black"
  })
  const [state,updateState]=useState({
    visibility:"false",
    message:"Your Message",
    type:"success"
  })
  return (
    <div>
      {/* <Router> */}
      <Navbar user="Afsan" currentMode={theme} changeMode={changeTheme}/>
      {/* <Routes> */}
        {/* <Route path='/' element={<TextForm currentMode={theme} alert={(state.visibility=="true")?<Alert message={state.message} type={state.type}/>:""} currentAlert={state} updateAlert={updateState}/>}/> */}
        {/* <Route exact path='/about' element={<About/>}/> */}
      {/* </Routes> */}
    {/* </Router> */}
    <TextForm currentMode={theme} alert={(state.visibility=="true")?<Alert message={state.message} type={state.type}/>:""} currentAlert={state} updateAlert={updateState}/>
    </div>
  );
}

export default App;
