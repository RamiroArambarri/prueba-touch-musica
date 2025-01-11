import { useState, useRef, useEffect } from 'react'
import './App.css'
import Noctambularia from './assets/noctambularia.mp3'

function App() {
  const [message, setMessage] = useState(null)
  const songRef = useRef(null)
  const [paused, setPaused] = useState(true)

  const clickHandler = () => {
    if (songRef.current.paused) {
      songRef.current.play()
      setPaused(false)
    } else {
      songRef.current.pause()
      setPaused(true)
    }

  }

  return (
    <>
      <audio ref={songRef} src={Noctambularia}></audio>
      <button onClick={clickHandler}>{paused ? 'Play' : 'Pausa'}</button>
      <AudioContextCreator setMessage={setMessage} />
      {message && <div style={{ border: 'solid white 2px', padding: '2rem' }}>{message}</div>}
    </>
  )
}

export default App


const AudioContextCreator = ({ setMessage }) => {


  useEffect(() => {
    const interactionHandler = () => {
      const context = new AudioContext()

      if (context.state == 'running') {
        setMessage(':)')
        console.log(context.state)
      } else if (context.state == 'suspended') {
        setMessage('Error Error Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error ************************************Esto esta maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal************************************Error Error Error Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error ErrorError Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error')
        console.log(context.state)
      } else {
        console.log(context.state)
        setMessage('Error no previsto: ' + context.state)
      }
    }

    window.addEventListener('click', interactionHandler)

    return () => {
      window.removeEventListener('click', interactionHandler)
    }
  }, [])
}