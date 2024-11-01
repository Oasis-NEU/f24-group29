import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardWindow from './components/card-window.jsx'
import CreateForm from './components/create-entry-form.jsx'

function App() {

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    deadline: '',
    payPerHour: '',
    status: '',
    annualPay: '',
});

const [errorMessage, setErrorMessage] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
  return (
    <>
     <CreateForm
     errorMessage={errorMessage}
     setErrorMessage={setErrorMessage}
     successMessage={successMessage}
     setSuccessMessage={setSuccessMessage} />
     </>
  )
}

export default App
