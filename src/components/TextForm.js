import React from 'react'
export default function TextForm(props) {
    return (
        <div className="container my-4">
            <h3>{props.heading}</h3>
            <textarea className="form-control" placeholder="Leave a text here" id="floatingTextarea2" rows="8"></textarea>
            <div className="container">
            <button className="btn btn-primary my-3 mx-auto d-block">Submit</button>
            </div>
        </div>
    );
}
