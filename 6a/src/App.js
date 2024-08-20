import { useEffect, useState } from 'react';
import { Note } from './Note';
import { NoteForm } from './noteForm';
import { apiService } from './services/notes/apiService.js';

export default function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiService.getNotes()
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching notes:', error);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAdd = {
      title: newNote,
      body: newNote
    };

    apiService.createNote(noteToAdd)
      .then((newNoteFromServer) => {
        setNotes([...notes, newNoteFromServer]);
        setNewNote("");
      })
      .catch((error) => {
        console.error('Error creating note:', error);
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <NoteForm 
        newNote={newNote}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
