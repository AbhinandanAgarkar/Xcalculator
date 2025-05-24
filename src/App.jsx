import { useState } from 'react'
import './App.css'
import "./keypad.css"

function App() {

  const [result, setResult]= useState('');

  const [input, setInput]= useState('');

  const handleChange = (e)=>{
    setInput(e.target.value);
    setResult('');
  }

  const handleClick = (value)=>{

     if (result && !['+', '-', '*', '/'].includes(value)) {
      setInput(value);
      setResult('');
      return;
     }

    else if (result && ['+', '-', '*', '/'].includes(value)) {
      setInput(result + value);
      setResult('');
      return;
    }

     if (['+', '*', '/'].includes(value) && input === '') {
      return;
    }

    const lastChar = input.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);
    const isValueOperator = ['+', '-', '*', '/'].includes(value);

    if (isLastCharOperator && isValueOperator) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
    setResult('');

  }
  const clear = ()=>{
  setInput('');
  setResult('');
  }

  const calculation =()=>{
    if(!input){
      setResult("Error");
      return;
    }

    try {

      let expressionResult = eval(input);

      if (isNaN(expressionResult)) {
        setResult('NaN');
      }

      else if (!isFinite(expressionResult)) {
        setResult('Infinity');
      }

      else {
        setResult(expressionResult.toString());

        setInput(expressionResult.toString());
      }
    } catch (error) {
      setResult('Error');
      console.error('Calculation error:', error);
    }
   

  }
  return (
    <>
    <div className='calculator'>

    <h1>React Calculator</h1>

    <input value={input} onChange={handleChange}/>

    <div className='result'>{result}</div>
    
     <div className="keypad">
      <button onClick={()=>handleClick('7')} value={7}>7</button>
      <button onClick={()=>handleClick('8')} value={8}>8</button>
      <button onClick={()=>handleClick('9')} value={9}>9</button>
      <button onClick={()=>handleClick('+')} value={'+'}>+</button> 
      <button onClick={()=>handleClick('4')} value={4}>4</button>
      <button onClick={()=>handleClick('5')} value={5}>5</button>
      <button onClick={()=>handleClick('6')} value={6}>6</button>
      <button onClick={()=>handleClick('-')} value={'-'}>-</button>
      <button onClick={()=>handleClick('1')} value={1}>1</button>
      <button onClick={()=>handleClick('2')} value={2}>2</button>
      <button onClick={()=>handleClick('3')} value={3}>3</button>
      <button onClick={()=>handleClick('*')} value={'*'}>*</button>
      <button onClick={clear} >C</button> 
      <button onClick={()=>handleClick('0')} value={0}>0</button> 
      <button onClick={calculation}>=</button>
      <button onClick={()=>handleClick('/')} value={'/'}>/</button> 
    </div>

    </div>
    </>
  )
}

export default App
