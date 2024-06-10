import React,{useState} from 'react';
export default function TextForm({currentMode,alert,updateAlert}){
    const [text,setText]=useState("");
    function convertToUpper(){
        setText(text.toUpperCase());
        updateAlert({
            visibility:"true",
            message:"Converted To Uppder Case",
            type:"success"
        })
        setTimeout(()=>{
            updateAlert({
                visibility:"false",
                message:"false",
                type:"false"
            })
        },1500)
    }
    function convertToLower(){
        setText(text.toLowerCase());
        updateAlert({
            visibility:"true",
            message:"Converted To Lower Case",
            type:"success"
        })
        setTimeout(()=>{
            updateAlert({
                visibility:"false",
                message:"false",
                type:"false"
            })
        },1500)
    }
    function changeInnerText(e){
        setText(e.target.value);
    }
    function convertToCapital(){
        // let text=e.target.value;
        if(text!=""){
            setText(text[0].toUpperCase()+text.slice(1));
        }
        updateAlert({
            visibility:"true",
            message:"Converted To Capital Case",
            type:"success"
        })
        setTimeout(()=>{
            updateAlert({
                visibility:"false",
                message:"false",
                type:"false"
            })
        },1500)
    }
    function copyToClipboard() {
        var tempTextarea = document.createElement("textarea");
        tempTextarea.value = text;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        updateAlert({
            visibility:"true",
            message:"Copied To ClipBoard",
            type:"success"
        })
        setTimeout(()=>{
            updateAlert({
                visibility:"false",
                message:"false",
                type:"false"
            })
        },1500)
    }
    let buttonStyle={
        color:currentMode.backgroundColor,
        backgroundColor:currentMode.color
    }
    return(
        <>
            {alert}
            <div id="textFormContainer" className="center">
                <h2 style={currentMode}>Enter The Text Below</h2>
                <textarea name="" id="textForm" cols="150" rows="10" value={text} onChange={changeInnerText} placeholder='Enter Text Here'></textarea>
            </div>
            <div id='analyzer' className='center'>
                <button className='btn' onClick={convertToUpper} style={buttonStyle}>Upper Case</button>
                <button className='btn' onClick={convertToLower} style={buttonStyle}>Lower Case</button>
                <button className='btn' onClick={convertToCapital} style={buttonStyle}>Capital Case</button>
                <button className='btn' onClick={copyToClipboard} style={buttonStyle}>Copy To Clip Board</button>
            </div>

            <div id="preview" className='center'>
                <h2 style={currentMode}>Preview</h2>
                <p style={currentMode}>
                {text}
                </p>
            </div>
        </>
    )
}