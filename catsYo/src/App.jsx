import { useState, useEffect } from 'react';
import './App.css';

const CAT_FACT = 'https://catfact.ninja/fact';
const CAT_URL_PREFIX = 'https://cataas.com';
const CAT_IMG_URL = `${CAT_URL_PREFIX}/cat/says/Hello?json=true`;

function App() {
  const [fact, setFact] = useState(''); // Inicializa con una cadena vacía
  const [url, setUrl] = useState(''); // Inicializa con una cadena vacía

  const getFact = () => {
    fetch(CAT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
        console.log({ fact });
      });
  };

  const getImg = () => {
    fetch(CAT_IMG_URL)
      .then(res => res.json())
      .then(data => {
        const { url } = data;
        setUrl(`${CAT_URL_PREFIX}${url}`);
      });
  };

  useEffect(() => {
    getFact();
    getImg();
  }, []);

  return (
    <>
      <h1>Cats</h1>
      <p>{fact}</p>
      {url && <img alt='Cat' src={url} />}
    </>
  );
}

export default App;
