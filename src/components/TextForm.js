import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleCaClick = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Converted to Capitalize", "success");
    }
    const handleResetClick = () => {
        setText("");
        props.showAlert("Text Reset", "success");
    }
    const handleReplaceClick = () => {
        let redColor = text.replace(/ramesh/i, 'Suseela');
        setText(redColor);
        props.showAlert("Text Replaced", "success");
    }
    const handleCopyClick = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }
    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    let buttonClass = `btn btn-${props.theme} m-1 my-1`;
    // text = "new text"; wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.theme === 'light' ? 'white' :props.theme === 'dark' ? 'gray'  : props.theme === 'primary' ? 'blue' : props.theme === 'success' ? 'green' : 'white', color: props.theme === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <div>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleLoClick}>Convert to Lower Case</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleCaClick}>Convert to Capitalize</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleExtraSpaceClick}>Remove Extra Space</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleReplaceClick}>Replace Text</button>
                    <button disabled={text.length===0} className={buttonClass} onClick={handleResetClick}>Reset Textarea</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Nothing to preview"}</p>
            </div>
        </>
    )
}
