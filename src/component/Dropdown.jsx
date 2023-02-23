import React from 'react'

const Dropdown = ({setPalette, setBg,palette}) => {

    const handlePaletteChange = (event) => {
        setPalette(event.target.value);
        // set Bg color
        if (event.target.value === "red") {
          setBg("#FF0000");
        } else if (event.target.value === "green") {
            setBg("#00FF00");
        } else if (event.target.value === "blue") {
            setBg("#0000FF");
        }else if (event.target.value === "pink") {
            setBg("#FFC0CB");
        }else if (event.target.value === "teal") {
            setBg("#008080");
        }else if (event.target.value === "yellow") {
            setBg("#FFFF00");
        }

      };
  return (
    <div>
        <label>Color Palette : </label>
        <select value={palette} onChange={handlePaletteChange}>
          <option value="">Select a Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value='pink'>Pink</option>
          <option value="teal">Teal</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
  )
}

export default Dropdown