import './App.css';
import { useState } from 'react';

function App() {

//const [left, setLeft] = useState(0)
//const [right, setRight] = useState(0)

const [counters, setCounters] = useState({
  left : 0,
  right : 0,
  n : 0,
  mensaje: 'Mensaje en el estado'
})


const handleClickLeft = () =>{
  setCounters({
    ...counters,//trae todo lo que tenemos en counters
    left: counters.left+1,
    n: counters.n+1
  })
}

const handleClickRight = () =>{
  setCounters({
    ...counters,//trae todo lo que tenemos en counters(...)
    right: counters.right+1,
    n: counters.n+1
  })
}

  return (
    <div>

      {counters.left}
      <button onClick={handleClickLeft}>left</button>

      <button onClick={handleClickRight}>right</button>
      {counters.right}
      
      <p>{counters.n}</p>

      <p>{counters.mensaje}</p>
    </div>
  );
}

export default App;
