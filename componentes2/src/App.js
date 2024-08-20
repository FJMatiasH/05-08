import './App.css';
import { useState } from 'react';


function App() {

//const [left, setLeft] = useState(0)
//const [right, setRight] = useState(0)

const [counters, setCounters] = useState({
  left : 0,
  right : 0,
  mensaje: 'Mensaje en el estado'
})

const [clicks, setClicks] = useState([])


const handleClickLeft = () =>{
  const newCountersState = {
    ...counters,//trae todo lo que tenemos en counters
    left: counters.left+1,
  };
  setCounters(newCountersState);
  setClicks(prevClicks => ([...prevClicks, "L"]))
};

const handleClickRight = () => {
  setCounters( {
    ...counters,//trae todo lo que tenemos en counters
    right: counters.right+1,
  });
setClicks((prevClicks) => [...prevClicks, "R"]);
};


  return (
    <div>

      {counters.left}
      <button onClick={handleClickLeft}>left</button>

      <button onClick={handleClickRight}>right</button>
      {counters.right}
      
      <p>Clicks totales: {clicks.length}</p>

      <p>Clicks:{clicks}</p>
    </div>
  );
}

export default App;
