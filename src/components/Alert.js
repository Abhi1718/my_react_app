import React from 'react'

export default function Alert(props) {
    // This function can help you to change first character of the given word to uppercase
    const toLowerCase = (word) => {
        // Converting the whole word to lowercase
        const lower = word.toLowerCase();
        // Converting the first cahracter of the word to uppercase and the slice method return the whole  text excepting the first character of the word
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div style={{ height: '50px' }}>
                {/* The JSX converts into jsvascript calls so props.alert && the JSX */}
                {props.alert &&
                    <div className={`alert alert-${props.alert.type}`} role="alert">
                        <strong>{toLowerCase(props.alert.type)}: </strong>{props.alert.msg}.
                    </div>}
            </div>
            <div style={{ height: '50px' }}>
                {/* The JSX converts into jsvascript calls so props.alert && the JSX */}
                <div className={`alert bg-null text-light`} style={{backgroundColor:'white'}} role="alert">
                    <strong>Hi : </strong>Abhishek is a good programmer.
                </div>
            </div>
        </>

    )
}
