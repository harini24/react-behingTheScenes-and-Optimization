import React,{useState} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
   const [showpara,setShowPara] = useState(false)

   const toggleparahandler = props => {
     setShowPara(showpara=>!showpara)
   }
   console.log("app.js running")
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggleparahandler}>toggle para</Button>
    </div>
  );
}

export default App;

