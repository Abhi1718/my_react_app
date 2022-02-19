import React, { useState } from 'react'
export default function TextForm(props) {
    // the first argument is the acutal value {text} and the second {nextTet}argument is the function that
    // you can use to mutate the text variable
    const [text, nextText] = useState("")
    const onClickUpHandler = () => {
        const newText = text.toUpperCase()
        nextText(newText)
        props.showAlert('Successufully converted to upeercase','success')
        // console.log("Clicked on the onclick handler")
        // nextText("You have been clicked on onClickHandler")
    }
    const onClickLowHandler = () => {
        const newText = text.toLowerCase()
        nextText(newText)
        props.showAlert('Successufully converted to lowercase','success')
        // console.log("Clicked on the onclick handler")
        // nextText("You have been clicked on onClickHandler")
    }
    const onChangeHandler = (event) => {
        // console.log("This is a onChangeHandler")
        nextText(event.target.value)
    }
    const onClearText = (event) => {
       // console.log("Clearing the text")
        nextText('')
    }

    return (
        <div className="container my-4">
            <h3>{props.heading}</h3>
            <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#000000', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter Text Here' value={text} onChange={onChangeHandler} className={`form-control`} id="floatingTextarea2" rows="8"></textarea>
            <div className="container">
                <button onClick={onClickUpHandler} className="mx-2 btn btn-primary my-3">ChangeToUpperCase</button>
                <button onClick={onClickLowHandler} className="mx-2 btn btn-primary my-3 ">ChangeToLowerCase</button>
                <button onClick={onClearText} className="mx-2 btn btn-primary my-3 ">ClearText</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>Your text has {text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes take to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Write something on the text box'}</p>
            </div>
        </div>
    );
}
