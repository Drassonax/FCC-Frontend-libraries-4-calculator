import React from 'react'

class MathElements extends React.Component {
    constructor(props) {
        super(props)
        this.currentNum = this.currentNum.bind(this)
        this.currentOperator = this.currentOperator.bind(this)
        this.calculate = this.calculate.bind(this)
        this.state = {
            num: 0
        }
    }

    currentNum = (e) => {
        const btn = document.getElementById(e.target.id)
        btn.setAttribute('class', 'col-3 col-md-1 number activated')
        setTimeout(() => {
            btn.setAttribute('class', 'col-3 col-md-1 number')
        }, 100)
        if (this.props.currentExpression.includes('=')) {
            this.props.clearExpression()
            this.setState({ num: parseInt(e.target.value) })
            this.props.setCurrentExpression(e.target.value)
        } else if (this.props.currentExpression.includes('.')) {
            this.props.setCurrentExpression(this.state.num.toString().concat(e.target.value))
            this.setState({ num: this.state.num.concat(e.target.value) })
        } else {
            if (!/\d/.test(this.props.currentExpression) && this.props.expression.length > 0) {
                this.props.pushExpression()
            }
            this.props.setCurrentExpression((this.state.num * 10 + parseInt(e.target.value)).toString())
            this.setState({ num: this.state.num * 10 + parseInt(e.target.value)})
        }
    }
    currentOperator = (e) => {
        const btn = document.getElementById(e.target.id)
        btn.setAttribute('class', 'col-3 col-md-1 operator activated')
        setTimeout(() => {
            btn.setAttribute('class', 'col-3 col-md-1 operator')
        }, 100)
        if (this.props.currentExpression.includes('=')) {
            this.props.continueCalculating()
            this.setState({ num: 0 })
        } else if (/\d/.test(this.props.currentExpression)) {
            this.props.pushExpression()
            this.setState({ num: 0})
        }
        this.props.setCurrentExpression(e.target.value)
    }
    placeDecimalPoint = (e) => {
        const btn = document.getElementById(e.target.id)
        btn.setAttribute('class', 'col-3 col-md-1 number activated')
        setTimeout(() => {
            btn.setAttribute('class', 'col-3 col-md-1 number')
        }, 100)
        if (this.props.currentExpression.includes('=')) {
            this.props.clearExpression()
            this.setState({ num: '0.' })
            this.props.setCurrentExpression('0.')
        } else if (!this.props.currentExpression.toString().includes('.')) {
            if (/\d/.test(this.props.currentExpression)) {
                this.props.setCurrentExpression(this.state.num.toString().concat('.'))
                this.setState({ num: this.state.num.toString().concat('.') })
            } else {
                if (this.props.expression.length > 0) {
                    this.props.pushExpression()
                }
                this.props.setCurrentExpression('0.')
                this.setState({ num: '0.' })
            }
        }
    }
    calculate = (e) => {
        const btn = document.getElementById(e.target.id)
        btn.setAttribute('class', 'col-3 col-md-1 activated')
        setTimeout(() => {
            btn.setAttribute('class', 'col-3 col-md-1')
        }, 100)
        if (/\d/.test(this.props.currentExpression) && !this.props.currentExpression.includes('=')) {
            this.props.pushExpression()
            this.props.performMath()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button className="col-3 col-md-1 number" id="seven" value="7" onClick={this.currentNum}>7</button>
                    <button className="col-3 col-md-1 number" id="eight" value="8" onClick={this.currentNum}>8</button>
                    <button className="col-3 col-md-1 number" id="nine" value="9" onClick={this.currentNum}>9</button>
                    <button className="col-3 col-md-1 operator" id="divide" value="/" onClick={this.currentOperator}>/</button>
                </div>
                <div className="row justify-content-center">
                    <button className="col-3 col-md-1 number" id="four" value="4" onClick={this.currentNum}>4</button>
                    <button className="col-3 col-md-1 number" id="five" value="5" onClick={this.currentNum}>5</button>
                    <button className="col-3 col-md-1 number" id="six" value="6" onClick={this.currentNum}>6</button>
                    <button className="col-3 col-md-1 operator" id="multiply" value="*" onClick={this.currentOperator}>*</button>
                </div>
                <div className="row justify-content-center">
                    <button className="col-3 col-md-1 number" id="one" value="1" onClick={this.currentNum}>1</button>
                    <button className="col-3 col-md-1 number" id="two" value="2" onClick={this.currentNum}>2</button>
                    <button className="col-3 col-md-1 number" id="three" value="3" onClick={this.currentNum}>3</button>
                    <button className="col-3 col-md-1 operator" id="subtract" value="-" onClick={this.currentOperator}>-</button>
                </div>
                <div className="row justify-content-center">
                    <button className="col-3 col-md-1 number" id="decimal" value="." onClick={this.placeDecimalPoint}>.</button>
                    <button className="col-3 col-md-1 number" id="zero" value="0" onClick={this.currentNum}>0</button>
                    <button className="col-3 col-md-1" id="equals" value="=" onClick={this.calculate}>=</button>
                    <button className="col-3 col-md-1 operator" id="add" value="+" onClick={this.currentOperator}>+</button>
                </div>
            </div>
        )
    }
}

export default MathElements