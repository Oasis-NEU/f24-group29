import { supabase } from '/supabase-client';

    // updates fields when user types in data & on screen
    export const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // onSubmit function for form
    export const handleSubmit = async (e) => {

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