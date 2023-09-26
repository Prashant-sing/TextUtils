import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to UpperCase!!", "Success")//Commenting out, because green colour 
    // doesn't appears when textbuttons were clicked
  }
  const handleLoClick = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to LowerCase!!", "Success")
  }
  const handleTrimClick = () =>{
    // console.log("Trim was clicked" + text);
    let newText = text.trimEnd();
    setText(newText);
    // props.showAlert("Trimmed from End!!", "Success")
  }
  const handleClearClick = () =>{
    // console.log("handleClear was clicked" + text);
    let newText = "";
    setText(newText);
    // props.showAlert("Text is cleared!!", "Success")
  }
  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);//It will set the text that we will change 
    //or will let us type in the box...
  }
  // const handleCopyClick = () =>{
  //   // console.log("handleCopyClear was clicked" + text);
  //   var newText = document.getElementById("myBox");
  //   newText.select();
  //   navigator.clipboard.writeText(newText.value);
  //   setText(newText);
  // }
  const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }


  //    [State, setState]
  const [text, setText] = useState('');//hooks let us use 
  //all the class based functions without using class.
  // text = "new text";//Wrong way to set the state, can't set directly
  // setText("new text");//Correct way to set the state
  return (
    <>
          <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
              <h1>{props.heading}</h1>
              <div className="mb-3">
                <textarea className="form-control" value = {text} onChange =    {handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
              </div>
              <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
              <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
              <button type="button" className="btn btn-primary mx-2" onClick={handleTrimClick}>TrimEnd</button>
              <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
              {/* <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button> */}
              <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
         <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length} Words and {text.length} Characters</p>
              <p>{0.008* text.split(" ").length} minutes read</p>
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Enter text in the textbox above to preview it here"}</p>
         </div>
    </>
  )
}
