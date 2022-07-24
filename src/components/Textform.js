import React,{useState} from 'react'

export default function Textform() {

    const chageUpCase= ()=>{
        console.log("Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelOnClick = (event)=>{
        console.log("Changed");
        setText(event.target.value);
    }
    const chageLoCase = ()=>{
        console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    
    
    const [text,setText] = useState("Enter Here");
  return (
    <>
    <div>
      
        
        <div className="mb-3">
        <textarea className="form-control" onChange={handelOnClick} id="mybox" rows="6" value={text}></textarea>
        <button className='btn btn-primary' onClick={chageUpCase} >Change to Uppercase</button>
        <button className='btn btn-primary mx-3' onClick={chageLoCase} >Change to Lowercase</button>
        
        </div>
    </div>
    <div>Number of words and letters</div>
    <p> words : {text.split(" ").length} letters : {text.length}</p>

    </>
  )
}
