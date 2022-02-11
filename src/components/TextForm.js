import React, {useState} from 'react'
export default function TextForm(props) {
    // the first argument is the acutal value {text} and the second {nextTet}argument is the function that
    // you can use to mutate the text variable
    const [text,nextText] = useState("Enter the text here")
    const onClickUpHandler = ()=>{
        const newText = text.toUpperCase()
        nextText(newText)
        console.log("Clicked on the onclick handler")
        // nextText("You have been clicked on onClickHandler")
    }
    const onClickLowHandler = ()=>{
        const newText = text.toLowerCase()
        nextText(newText)
        console.log("Clicked on the onclick handler")
        // nextText("You have been clicked on onClickHandler")
    }
    const onChangeHandler = (event)=>{
        console.log("This is a onChangeHandler")
        nextText(event.target.value)
    }

    return (
        <div className="container my-4">
            <h3>{props.heading}</h3>
            <textarea value={text} onChange={onChangeHandler} className="form-control" id="floatingTextarea2" rows="8"></textarea>
            <div className="container">
            <button onClick={onClickUpHandler} className="mx-2 btn btn-primary my-3">ChangeToUpperCase</button>
            <button onClick={onClickLowHandler} className="mx-2 btn btn-primary my-3 ">ChangeToLowerCase</button>
            </div>
        </div>
    );
}
