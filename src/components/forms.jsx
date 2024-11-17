import { useState } from'react';
import { handleCreateEntrySubmit } from '../hooks/fetch-data';
import { handleUpdateEntrySubmit } from '../hooks/fetch-data';


export function Forms({applications, setApplications, currentId, setCurrentId}) {

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

    return(
        <>
        <CreateEntryForm 
            applications={applications} setApplications={setApplications}
            formData={formData} setFormData={setFormData}
            errorMesssage={errorMessage} setErrorMessage={setErrorMessage}
            successMessage={successMessage} setSuccessMessage={setSuccessMessage} />
        </>
    )
}

export function CreateEntryButton() {

    return(
        <button id="add-entry-button">Add an entry</button>
    )
}


export function CreateEntryForm({
    applications, setApplications, 
    formData, setFormData, 
    errorMessage, setErrorMessage, 
    successMessage, setSuccessMessage}) {
    
    // updates fields when user types in data & on screen
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    return(
        <div className="form-div">
        <form 
        id="create-entry-form" 
        onSubmit={(e) => handleCreateEntrySubmit(e, applications, setApplications, formData, setFormData, errorMessage, setErrorMessage, successMessage, setSuccessMessage)}
        >
            <h1>Create a job entry</h1>
            <label className="form-label">Job Title</label>
                <input
                className="form-input" 
                type="text" 
                name="title" 
                value={formData.title} 
                placeholder="Dishwasher" 
                onChange={handleChange} />
            <label class="form-label">Job Company</label>
                <input
                className="form-input" 
                type="text" 
                name="company" 
                value={formData.company} 
                placeholder="Microsoft"
                onChange={handleChange} />
            <label class="form-label">Job Location</label>
                <input
                className="form-input" 
                type="text" 
                name="location" 
                value={formData.location} 
                placeholder="Boston"
                onChange={handleChange} />
            <label class="form-label">Pay (Hourly)</label>
                <input
                className="form-input" 
                type="number" 
                name="payPerHour" 
                value={formData.payPerHour} 
                placeholder="$25"
                onChange={handleChange} />
                <label>Pay (Salary)</label>
                <input
                className="form-input" 
                type="number" 
                name="annualPay" 
                value={formData.annualPay} 
                placeholder="$75,000"
                onChange={handleChange} />
            <label className="form-label">Job Type</label>
            <select 
            className="form-input"
            value={formData.type}
            onChange={handleChange}
            >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                </select>
            <label className="form-label">Job Status</label>
            <select 
            className="form-input"
            value={formData.status}
            onChange={handleChange}>
                <option>Applied</option>
                <option>Screening</option>
                <option>Interviewing</option>
                <option>Accepted</option>
                <option>Rejected</option>
                </select>
            <label className="form-label">Job Deadline</label>
                <input
                className="form-input" 
                type="date" 
                name="deadline" 
                value={formData.deadline}
                onChange={handleChange} />
                <button type="submit">Create Application</button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
        </form>
        </div>
     )
};



export function UpdateEntryForm({applications, setApplications, 
    formData, setFormData, 
    errorMessage, setErrorMessage, 
    successMessage, setSuccessMessage}) {


    return(
        <form 
        id="update-entry-form" 
        onSubmit={(e) => handleUpdateEntrySubmit(e, 
        applications, setApplications, 
        formData, setFormData, 
        errorMessage, setErrorMessage, 
        successMessage, setSuccessMessage)}>
            <h1>Update Job Entry</h1>
                <label>Job Title</label>
                    <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    placeholder="Dishwasher" 
                    onChange={handleChange} />
                <label>Job Company</label>
                    <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    placeholder="Microsoft"
                    onChange={handleChange} />
                <label>Job Location</label>
                    <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    placeholder="Boston"
                    onChange={handleChange} />
                <label>Pay (Hourly)</label>
                    <input 
                    type="number" 
                    name="payPerHour" 
                    value={formData.payPerHour} 
                    placeholder="$25"
                    onChange={handleChange} />
                    <label>Pay (Salary)</label>
                    <input 
                    type="number" 
                    name="annualPay" 
                    value={formData.annualPay} 
                    placeholder="$75,000"
                    onChange={handleChange} />
                <label>Job Type</label>
                <select>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Internship</option>
                    </select>
                <label>Job Status</label>
                <select>
                    <option>Applied</option>
                    <option>Screening</option>
                    <option>Interviewing</option>
                    <option>Accepted</option>
                    <option>Rejected</option>
                    </select>
                <label>Job Deadline</label>
                    <input 
                    type="date" 
                    name="deadline" 
                    value={formData.deadline}
                    onChange={handleChange} />
                    <button type="submit">Create Application</button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
            </form>
        )
    }