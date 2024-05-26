import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")
  const [colorHeading, setColorHeading] = useState("Current Color : Olive")
  const [textColor, setTextColor] = useState("black");
  const handleColorChange = (colorName, newTextColor="black") => {
    setColor(colorName.toLowerCase());
    setColorHeading(`Current Color : ${colorName}`);
    if(newTextColor)
      setTextColor(newTextColor);
  };
  return (
    <>
    <div className='w-full h-screen ' style={{backgroundColor: color}}>
      <h1  id='colorHeading'
       style={{fontWeight:'bold', textAlign:'center',paddingTop:'15px', color:textColor}}>{colorHeading}</h1>
      <div className=' fixed bottom-10 flex flex-wrap justify-center inset-x-0 p-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white'>
          <button 
          onClick={()=>{handleColorChange("Red")}}
          className='rounded-2xl p-2'
          style={{backgroundColor:'red'}}
          >Red</button>
          <button 
          onClick={()=>{handleColorChange("Green")}}
          className='rounded-2xl p-2'
          style={{backgroundColor:'green'}}
          >Green</button>
          <button 
          onClick={()=>{handleColorChange("Blue")}}
          className='rounded-2xl p-2'
          style={{backgroundColor:'blue'}}
          >Blue</button>
          <button 
          onClick={()=>{handleColorChange("Black","white")}}
          className='rounded-2xl p-2'
          style={{backgroundColor:'black'}}
          >Black</button>
          <button 
          onClick={()=>{handleColorChange("Purple","white")}}
          className='rounded-2xl p-2'
          style={{backgroundColor:'purple'}}
          >Purple</button>
          <button 
          onClick={()=>{handleColorChange("White")}}
          className='rounded-2xl p-2'
          style={{color:'black', border:'black 2px solid'}}
          >White</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
