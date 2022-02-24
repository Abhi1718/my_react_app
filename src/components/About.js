// import React,{ useState } from 'react'
export default function About(props) {

    // myStyle object can set the corresponding css properties on props conditions
    // let myStyle ={
    //     backgroundColor:props.mode ==='light'?'white':'black',
    //     color:props.mode ==='dark'?'white':'black'
    // }
    // // let myBorder={
    //     border:props.mode ==='light'?'':'1px solid white'
    // }

    return (
        <div className="container">
            <h1 className={`my-31`} style={{color: props.mode ==='dark'?'white':'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button my-31 bg-${props.mode}`} style={{color: props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show my-31 bg-${props.mode}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className={`accordion-body my-31 bg-${props.mode}`}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={{color: props.mode ==='dark'?'white':'black'}} className={`accordion-button collapsed my-31 bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse my-31 bg-${props.mode}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button style={{color: props.mode ==='dark'?'white':'black'}} className={`accordion-button collapsed my-31 bg-${props.mode}`}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={`accordion-body my-31 bg-${props.mode}`}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
    

