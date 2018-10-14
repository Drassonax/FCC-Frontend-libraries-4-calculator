import React from "react"

const Display = (props) => {
    return (
        <div id="display">
            <div id="clear" onClick={props.clearExpression}>Clear</div>
            <div id="display-expression">
                {props.expression}
            </div>
            <div id="display-current-item">
                {props.currentExpression}
            </div>
        </div>
    )
}

export default Display