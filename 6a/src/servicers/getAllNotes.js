
export const getAllNotes = ( ) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
       const {data}=response;
       return data
        }
  )
  }