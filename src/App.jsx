import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardWindow from './components/card-window.jsx'
import { Forms } from './components/forms.jsx'



function App() {

  const [applications, setApplications] = useState([]); // array holding all job applciations

  const [currentId, setCurrentId] = useState();
  
  return (
    <>
    <Forms 
    applications={applications}
    setApplications={setApplications}
    currentId={currentId}
    setCurrentId={setCurrentId}/>
     <CardWindow
     applications={applications}
     setApplications={setApplications} />
     </>
  )
}

export default App
