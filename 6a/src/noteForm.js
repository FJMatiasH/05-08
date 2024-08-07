export function NoteForm({ newNote, onChange, onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          onChange={onChange} 
          value={newNote} 
        />
        <button>Crear nota</button>
      </form>
    );
  }
  