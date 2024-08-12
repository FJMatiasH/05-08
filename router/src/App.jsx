import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './const'


function navigate(href){
  window.history.pushState({},'',href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage(){
  return(
    <>
    <h1>Home</h1>
    <p>Esta es una pagina desde cero - HOME -</p>
    <button onClick={()=> navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage(){
  return(
    <>
    <h1>About</h1>
    <div>
      <img 
      src='https://via.placeholder.com/150?text=MacBook+Pro'
      alt='fotografia'/>
    <p>Hola, soy Javier y estamos creado una pagina con react router</p>
    </div>
    <button onClick={()=> navigate('/')}>Ir a HOME</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return()=>{
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    }
  }, [])


  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
