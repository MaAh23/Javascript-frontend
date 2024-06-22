import React from 'react'
import './Form.css'
import { useState } from 'react'




const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);

    const [terms, setTerms] = useState(false);
    const [termsError, setTermsError] = useState(false);
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value);
                setFirstNameError(validateLength(e.target.value, 3));
                break;
            case 'email':
                setEmail(e.target.value);
                setEmailError(!validateEmail(e.target.value));
                break;
            case 'message':
                setMessage(e.target.value);
                setMessageError(validateLength(e.target.value));
                break;
            case 'terms':
                setTerms(e.target.checked);
                break;
           
        }
    };

    const validateLength = (value, minLength = 1) => {
        return value.length < minLength;
    };



    const validateEmail = (email) => {
        const emailLenght = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailLenght.test(String(email).toLowerCase());
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isTermsValid = e.target['terms'].checked;
        setTermsError(!isTermsValid);

        if (!firstNameError && !emailError && !messageError && isTermsValid) {
            setErrorMessage('');
            
        } else {
            setErrorMessage('Please correct the errors in the form.');
        }


        if (!firstNameError && !emailError && !messageError && isTermsValid){
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/users', {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({
                    firstName, email, message
                })
            })

            if (result.status === 201)
                alert('The message has been sent! ')
            else
                setErrorMessage ('Somthing went wrong!')
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="contact-formular">
            <div className='container'>
                <p className='errorMessage'>{errorMessage}</p>
                <h2 className='formular-rubrik'>Leave us a message for any information.</h2>
                <div className='input'>
                    <div className='searchbox'>
                        <label className={firstNameError ? 'error' : ''}>{`Name : ${firstNameError ? 'Name is Required!' : ''}`}</label>
                        <input type="text" name='firstName' value={firstName} onChange={handleChange} /></div>
                    <div className='searchbox'>
                        <label className={emailError ? 'error' : ''}> {`Email : ${emailError ? 'Invalid Email!' : ''}`} </label>
                        <input type="text" name='email' value={email} onChange={handleChange}/>
                    </div>
                    <div className='box1'>
                        <label className={messageError ? 'error' : ''}> {`Your Message : ${messageError ? 'You need to write a message!' : ''}`} </label>
                        <input type="text" name='message' value={message} onChange={handleChange} />
                    </div>
                    <div className='villkor'>
                        <h5 className={termsError ? 'error' : ''}>Terms and Conditions</h5>
                        <div>
                            <input type="checkbox" name="terms" checked={terms} onChange={handleChange} />
                            <label> Jag har läst och godkänner de allmänna villkoren</label>
                        </div>
                    </div>
                    <button type='submit'className="btn-yellow"> Send message </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
