import { useState } from'react';
import { supabase } from '/supabase-client';
import CreateEntryForm from './create-entry-form';

function Forms() {

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

    return(
        <>
        <CreateEntryForm 
            formData={formData}
            setFormData={setFormData}
            errorMesssage={errorMessage}
            setErrorMessage={setErrorMessage}
            jobId={jobId}
            setJobId={setJobId} />
        <UpdateEntryForm 
            formData={formData}
            setFormData={setFormData}
            errorMesssage={errorMessage}
            setErrorMessage={setErrorMessage}
            jobId={jobId}
            setJobId={setJobId} />
        </>
        // TO DO:
        // 1. TRANSPORT STATES TO PARENT
        // 2. PASS STATE VARIABLES AS PARAMS TO HANDLER FUNCTIONS
        // 3. IMPORT HANDLER FUNCTIONS INTO FORM COMPONENTS
        // 4. UPDATE ONSUBMITS TO BE CALLBACKS AND PASS PARAMS TO HANDLERS
    )
}