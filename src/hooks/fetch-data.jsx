import { supabase } from '/supabase-client';

    // TO DO
    // 1. Initialize unique ID in handleCreateEntrySubmit & set to state
    // 2. use that ID to update specific row in handleUpdateEntrySubmit
    // FORM STATUS: WORKING

    // onSubmit function for CREATE FORM
    export const handleCreateEntrySubmit = async (e, formData, setFormData, errorMessage, setErrorMessage, successMessage, setSuccessMessage, jobId, setJobId) => {

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

    // onSubmit function for UPDATE FORM
    export const handleUpdateEntrySubmit = async (e, formData, setFormData, errorMessage, setErrorMessage, successMessage, setSuccessMessage, jobId, setJobId) => {

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
                    annual_pay: annualPay }])
                    .eq('id', id);

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