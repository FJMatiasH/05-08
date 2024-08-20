// apiService.js
export const apiService = {
    // Obtener todas las notas
    getNotes: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error; // Re-throw to handle in component
      }
    },
    
    // Crear una nueva nota
    createNote: async (note) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('Error creating note:', error);
        throw error; // Re-throw to handle in component
      }
    }
  };
  