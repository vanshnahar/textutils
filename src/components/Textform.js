import React, { useState } from 'react'
import './Textform.css';
export default function Textform(props) {
     const handlerupclick = () => {
          console.log("upercase was clicked");
          let newText = text.toUpperCase()
          setText(newText);
          props.showalert("converted to uppercase","success")
     }
     const handlerarrangeclick = () => {
          

               }
          

     const handlerLoclick = () => {
          console.log("Lowercase was clicked");
          let newText = text.toLowerCase();
          setText(newText);
          props.showalert("converted to lowercase","success")

     }
     const handleronchange = (event) => {
          console.log("on changed");
          setText(event.target.value);
     }
     const [text, setText] = useState("Enter the text here");
     return (
          <>
               <div style={{color: props.mode==='dark' ?'white':'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">

                         <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="3" onChange={handleronchange}
                         style={{backgroundColor: props.mode==='dark'? 'gray':'white',color: props.mode==='dark' ?'white':'black'}}></textarea>
                    </div>
                    <button className="btn  bg-slate-900" onClick={handlerupclick} >convert to uppercase</button>
                    <button className="btn " onClick={handlerLoclick}>convert to Lowercase</button>
                    <button className="btn " onClick={handlerarrangeclick}>Remove space </button>
               </div>
               <div className="container my-45" style={{color: props.mode==='dark' ?'white':'black'}}>
                    <h1>Your text Summary</h1>
                    <p>{text.split(" ").length} words and {text.length} Characters</p>

                    <p>{0.008 * text.split(" ").length} Minutes Required to Read the Text </p>
                    <h2>Preview</h2>
                    <p>{text}</p>
               </div>
          </>

     )
}
