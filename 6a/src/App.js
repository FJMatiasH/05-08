import './App.css';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30',
    important: true
  },
  {
    id: 2,
    content: 'HTML',
    date: '2024-05-30',
    important: false
  },
  {
    id: 3,
    content: 'easy',
    date: '2020-05-30',
    important: true
  }
];


export default function App() {

  //comprueba si hay notas
  if(!notes || typeof notes === 'undefined'){
    return"No hay notas"
  }

  //devuelve las notas con el map
  return ( 
    <ol>
      {notes.map((note) =>{
        return (
          //es importante poner la key en una iteracion
          <li key={note.id}>  
            <p>
              <strong>{note.id}</strong>
              {note.content}
              <small><time>{note.date}</time></small>
            </p>
          </li>
      )})
    }
    </ol> 
  );
}
