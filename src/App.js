import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [disabled, setDisabled] = useState(false);


  const [color , setColor] = useState('red')
  const newBtnColor = color === 'red' ? 'blue' :'red';

  return (
    <div className="App">
      <button disabled={disabled} onClick={()=>setColor(newBtnColor)} style={{backgroundColor:color}}>Change to {newBtnColor}</button>
      <input 
      id='disable-btn'
      type="checkbox" 
      defaultChecked={disabled}
      onChange={(e)=> setDisabled(e.target.checked)} 
      />
    </div>
  );
}

export default App;
