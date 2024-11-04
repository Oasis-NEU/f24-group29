import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardWindow from './components/card-window.jsx'
import { CreateEntryForm } from './components/forms.jsx'

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

const [jobId, setJobId] = useState(null);

  return (
    <>
     <CreateEntryForm 
            formData={formData}
            setFormData={setFormData}
            errorMesssage={errorMessage}
            setErrorMessage={setErrorMessage}
            successMessage={successMessage}
            setSuccessMessage={setSuccessMessage}
            jobId={jobId}
            setJobId={setJobId} />
     </>
  )
}

export default App
