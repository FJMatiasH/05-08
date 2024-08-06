import { useEffect, useState } from 'react';
import { Note } from './Note.js';

export default function App(props) {
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState('');
const [loading, setLoading] = useState('');

useEffect(() => {
  console.log("UseEfect");
  setLoading(true);

    console.log("ahora");
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
        console.log("seteando las notas");
      setNotes(json)
      setLoading(false)
    });
}, [newNote]);

const handleChange = (event) => {
  setNewNote(event.target.value);
}

    const handleSubmit = (event) => {
      event.preventDefault();
        console.log("crear nota");
        const noteToAddToState = {
            id: notes.leght + 1,
            title: newNote,
            body: newNote
          };

        setNotes([...notes, noteToAddToState]);
        setNewNote("");
        };

  console.log("render");

  return (
    <div>
    <h1>Notes</h1>
    {
      loading ? "Cargando..." : ""}
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
       ))}
    </ol>

       <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Crear nota</button>
       </form>
    </div>
  );
}
