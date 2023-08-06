import React, {useState} from "react";

export default function TextForm(props) {
    const[text,setText] = useState("");
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick =()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  }

  const handleClearClick =()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
}

const handleCopy =()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard","success");
}

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }


  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#2a2a2a":"white",color:props.mode==="dark"?"white":"black"}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-2`} onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Text Summary</h2>
        <p>Number of words : {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
        <p>Number of characters : {text.length}</p>
        <p>Time to read : {0.008*text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes</p>
        <p>Preview: {text.length>0?text:"NO TEXT TO PREVIEW"}</p>
    </div>
    </>
  );
}
