import { useState } from 'react';
import { supabase } from '/supabase-client';

export default function CreateEntryForm() {
    
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

        // updates fields when user types in data & on screen
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value })
        };

    const handleCreateEntrySubmit = async (e) => {

        // Prevent page reload
        e.preventDefault(); 

        // Destructure data
        const { title, location, company, type, deadline, payPerHour, status, annualPay } = formData;
          
        // Insert data into table
        try {
            const { data, error } = await supabase
                .from('JobApplications')
                .insert([{ 
                    title: title, 
                    location: location, 
                    company: company,
                    type: type,
                    deadline: deadline,
                    pay_per_hour: payPerHour,
                    annual_pay: annualPay }]);


            if (error) throw error; // Handle error

            setSuccessMessage('Job application submitted successfully!');
            setErrorMessage(null); // Clear any previous error
             // Reset form
            setFormData({
                title: '',
                company: '',
                location: '',
                type: '',
                deadline: '',
                payPerHour: '',
                status: '',
                annualPay: '',
            });

        } catch (error) {
            console.error('Error inserting data:', error);
            setErrorMessage(`Failed to submit job application. Please try again. ${error}`);
            setSuccessMessage(null); // Clear any previous success message
        }
    };

    return(
        <form id="create-entry-form" onSubmit={handleCreateEntrySubmit}>
            <h1>Create a job entry</h1>
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
};