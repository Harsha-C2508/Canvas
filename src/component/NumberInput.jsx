import React from 'react'

const NumberInput = ({setNum,num}) => {
    const handleNumberChange = (event) => {
        setNum(event.target.value);
      };
  return (
    <div>
        <label htmlFor="numberInput">2D Number : </label>
        <input
          id="numberInput" 
          type="number"
          min={0}
          max={99}
          value={num}
          onChange={handleNumberChange}
        />
    </div>
  )
}

export default NumberInput