// import React,{ useState } from 'react'
export default function About(props) {

    // myStyle object can set the corresponding css properties on props conditions
    let myStyle ={
        backgroundColor:props.mode ==='light'?'white':'black',
        color:props.mode ==='dark'?'white':'black'
    }

    return (
        <div className="container my-3">
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle,{border:props.mode ==='light'?'':'1px solid white'}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Word count</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                        The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. This may particularly be the case in academia, legal proceedings, journalism and advertising
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle,{border:props.mode ==='light'?'':'1px solid white'}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Character Manipulation</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                        The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. This may particularly be the case in academia, legal proceedings, journalism and advertising
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle,{border:props.mode ==='light'?'':'1px solid white'}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Text</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"  style={myStyle}>
                        <div className="accordion-body">
                        The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. This may particularly be the case in academia, legal proceedings, journalism and advertising
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2">
                <button className="btn btn-primary mx-2" onClick={theme}>{btnText}</button>
                {/* <button className="btn btn-primary mx-2" onClick={lightMode}>LightMode</button>
            </div> */}

        </div>
    )
}
