import { useState } from 'react';


function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")
    
    const handleColorChange = (e) => {
        setColor(e.target.value)
        
    }
    return (<div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
            <p>Selected Color:{color}</p>
            
        </div>
        <label>Select a Color: <input type="color" value={color} onChange={handleColorChange}></input></label>
    </div>)
}
export default ColorPicker  