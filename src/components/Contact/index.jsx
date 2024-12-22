import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';
        if (!value) {
            error = 'This field is required';
        } else if (name === 'email' && !validateEmail(value)) {
            error = 'Invalid email address';
        }
        setErrors({
            ...errors,
            [name]: error
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform final validation
        const finalErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                finalErrors[key] = 'This field is required';
            } else if (key === 'email' && !validateEmail(formData[key])) {
                finalErrors[key] = 'Invalid email address';
            }
        });
        setErrors(finalErrors);

        if (Object.keys(finalErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Handle form submission logic here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.message && <span>{errors.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;
