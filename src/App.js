
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react'


function App() {
  const [mode,setMode] = useState("light");
  const toggleFun = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";

    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
 
  
  return (
    <>

    <Navbar title="App2" mode = {mode} toggled = {toggleFun}/>
    <div className='container'>

    <Textform />
    </div>
    </>
  );
}

export default App;
