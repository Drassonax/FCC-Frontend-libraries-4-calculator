import React from "react"

const Display = (props) => {
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <button id="clear" className="col-3 col-md-1" onClick={props.clearExpression}>C</button>
                <div id="display" className="col-9 col-md-3">
                    <div id="display-expression">{props.expression.length === 0 ? '---' : props.expression}</div>
                    <div id="display-current-item">{props.currentExpression}</div>
                </div>
            </div>
        </div>
    )
}

export default Display