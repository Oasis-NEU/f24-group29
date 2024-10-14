import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/job-cards.jsx'
import JobWindow from './components/job-window.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card 
     jobTitle={"Software Engineer"}
     jobCompany={"Northeastern University"}
     jobDeadline={"10/25/24"}
     jobPay={"$45-$61/hr"}
     jobType={"Internship"}
     jobStatus={"Applied"} />
     <div className="vertical-spacer" />
     <JobWindow 
     jobTitle={"Software Engineer"}
     jobCompany={"Northeastern University"}
     jobLocation={"Cambridge, MA"}
     jobDeadline={"10/25/24"}
     jobPay={"$45-$61/hr"}
     jobType={"Internship"}
     jobStatus={"Applied"}
     jobDateUpdated={"10/12/24"} />
     </>
  )
}

export default App
