import React from 'react'

const Colorpicker = ({setBg,bg}) => {
    const handleColorChange = (event) => {
        setBg(event.target.value);
      };
  return (
    <div>
        <label htmlFor="colorPicker">Color Picker : </label>
        <input
          id="colorPicker"
          type="color"
          value={bg}
          onChange={handleColorChange}
        />
      </div>
  )
}

export default Colorpicker