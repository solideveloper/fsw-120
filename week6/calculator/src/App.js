import React, {useState } from 'react'
import './App.css'

function CalculatorApp() {

  const[numOutput, outputSet] = useState(0)
  // eslint-disable-next-line
  const [storNbr, numInput] = useState(0)
  // eslint-disable-next-line
  const[operand, operandSet] = useState()

function numMath(number) {
  outputSet(`${(numOutput +number)}`)
}
// eslint-disable-next-line
function handleOperand(operator) {
  numInput(numOutput)
  operandSet(operator)
}

function doMath() {
  // eslint-disable-next-line
  outputSet(eval(numOutput))
}

function clearCalc() {
  outputSet(0)
  numInput(0)
  operandSet()
}

return (
  <div className="calcTitle">
    <h1>This Is My React Calculator!</h1> 
    <br/>
    <div className="box">
      <div className="result">{numOutput}</div>

      <div className="buttonNum" onClick={() => numMath(7)}>7</div>
      <div className="buttonNum" onClick={() => numMath(8)}>8</div>
      <div className="buttonNum" onClick={() => numMath(9)}>9</div>
      <div className="operand" onClick={() => numMath("/")}>÷</div>

      <div className="buttonNum" onClick={() => numMath(4)}>4</div>
      <div className="buttonNum" onClick={() => numMath(5)}>5</div>
      <div className="buttonNum" onClick={() => numMath(6)}>6</div>
      <div className="operand" onClick={() => numMath("*")}>x</div>

      <div className="buttonNum" onClick={() => numMath(1)}>1</div>
      <div className="buttonNum" onClick={() => numMath(2)}>2</div>
      <div className="buttonNum" onClick={() => numMath(3)}>3</div>
      <div className="operand" onClick={() => numMath("-")}>-</div>

      <div className="buttonNum" onClick={() => numMath(0)}>0</div>
      <div className="buttonNum" onClick={() => numMath(".")}>.</div>
      <div className="equalSign" onClick={() => doMath()}>=</div>
      <div className="operand" onClick={() => numMath("+")}>+</div>
      

      <div className="clear" onClick={() => clearCalc()}>Clear</div>
    </div>
  </div>
)
}

export default CalculatorApp