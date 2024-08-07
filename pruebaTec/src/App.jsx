import './App.css'
import { useState, useEffect } from 'react'

const CAT_FACT = 'https://catfact.ninja/fact'
const CAT_URL_PREFIX = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const getRandomFact = () =>{
      fetch(CAT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
  })
}

  //recuperar cita
  useEffect(() => {
    getRandomFact()
  },[])

  //recuperar imagen
  useEffect(() => {
    if(!fact) return

        // Obtiene las primeras tres letras de la primera palabra
        const firstWord = fact.split(' ',3).join(' ')

       fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
       .then(res => res.json())
       .then(data => {
        const {url} = response
        setImageUrl(catImageUrl)
      })
  }, [fact])

const handleClick = ()=>{
getRandomFact()
}


  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}

export default App
