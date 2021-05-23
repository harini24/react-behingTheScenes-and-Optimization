import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
   const [showpara,setShowPara] = useState(false)
   const [allowToggle,setAllowToggle] = useState(false)

   const toggleparahandler = useCallback(()  => {
     if(allowToggle){
     setShowPara(showpara=>!showpara)
     }
   },[allowToggle]);

   console.log("app.js running")
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showpara}></DemoOutput>
      <Button onClick={()=>{setAllowToggle(true)}}>allow toggle</Button>
      <Button onClick={toggleparahandler}>toggle para</Button>
    </div>
  );
}

export default App;

