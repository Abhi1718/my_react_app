import React, { useState } from 'react'
export default function TextForm(props) {
    // the first argument is the acutal value {text} and the second {nextTet}argument is the function that
    // you can use to mutate the text variable
    const [text, nextText] = useState("")

    // Manuplate the text to uppercase
    const onClickUpHandler = () => {
        const newText = text.toUpperCase()
        nextText(newText)
        props.showAlert('Successufully converted to upeercase','success')
        // console.log("Clicked on the onclick handler")
        // nextText("You have been clicked on onClickHandler")
    }

    // Manuplate the text to lowercase
    const onClickLowHandler = () => {
        const newText = text.toLowerCase()
        nextText(newText)
        props.showAlert('Successufully converted to lowercase','success')
        // nextText("You have been clicked on onClickHandler")
    }

    // This function can help you to write or make changes on the textarea
    const onChangeHandler = (event) => {
        // console.log("This is a onChangeHandler")
        nextText(event.target.value)
    }

    // This function can clear the text and set to empty
    const onClearText = (event) => {
       // console.log("Clearing the text")
        nextText('')
    }

    // This function is used to copy the textarea value or text
    const onCopyText = ()=>{
       navigator.clipboard.writeText(text)
       props.showAlert('Copied to clipboard','success')
    }

    return (
        <div className="container my-4">
            <h3>{props.heading}</h3>
            <textarea style={{color:`${props.mode}`==='dark'?'white':'black'}}  placeholder='Enter Text Here' value={text} onChange={onChangeHandler} className={`form-control bg-${props.mode}`} id="floatingTextarea2" rows="8"></textarea>
            <div className="container">
                <button style={{color:`${props.mode}`==='dark'?'white':'black'}} disabled = {text.length===0}onClick={onClickUpHandler} className={`mx-2 btn btn-primary my-3 bg-${props.mode} `}>ChangeToUpperCase</button>
                <button style={{color:`${props.mode}`==='dark'?'white':'black'}} disabled = {text.length===0}onClick={onClickLowHandler} className={`mx-2 btn btn-primary my-3 bg-${props.mode} `}>ChangeToLowerCase</button>
                <button style={{color:`${props.mode}`==='dark'?'white':'black'}} disabled = {text.length===0}onClick={onClearText} className={`mx-2 btn btn-primary my-3 bg-${props.mode} `}>ClearText</button>
                <button style={{color:`${props.mode}`==='dark'?'white':'black'}} disabled = {text.length===0}onClick={onCopyText} className={`mx-2 btn btn-primary my-3 bg-${props.mode} `}>CopyText</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes take to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to preview here'}</p>
            </div>
        </div>
    );
}
