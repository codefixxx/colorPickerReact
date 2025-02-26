import { useState } from 'react';


    const getComplementaryColor = (hex) => {
        hex = hex.replace("#", ""); // Remove # if present
        if (hex.length !== 6) return "#000000"; // Default to black if invalid
  
        // Convert hex to RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
  
        // Compute complementary RGB
        const compR = 255 - r;
        const compG = 255 - g;
        const compB = 255 - b;
  
        // Convert back to hex
        return `#${compR.toString(16).padStart(2, "0")}${compG
            .toString(16)
            .padStart(2, "0")}${compB.toString(16).padStart(2, "0")}`.toUpperCase();
    };


function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")
    
    const handleColorChange = (e) => {
        setColor(e.target.value)
        
    }
    return (<div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
            <p style={{color:getComplementaryColor(color)}}>Selected Color:{color}</p>
            
        </div>
        <label><p>Select a Color:</p> <input type="color" value={color} onChange={handleColorChange}></input></label>
    </div>)
}
export default ColorPicker  