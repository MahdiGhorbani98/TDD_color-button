import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color , setColor] = useState('red')
  const newBtnColor = color === 'red' ? 'blue' :'red';

  return (
    <div className="App">
      <button onClick={()=>setColor(newBtnColor)} style={{backgroundColor:color}}>Change to {newBtnColor}</button>
    </div>
  );
}

export default App;
