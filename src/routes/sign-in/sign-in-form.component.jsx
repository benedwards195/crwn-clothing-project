import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch(error) {
            if(error.code === "auth/wrong-password") {
                alert('Incorrect password')
            } else if (error.code === "auth/user-not-found") {
                alert("Incorrect username");
            } else {
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-in-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label='Email'
                type='email' 
                required onChange={handleChange}
                name='email' 
                value={email} />
                <FormInput 
                label='Password'
                type='password' 
                required onChange={handleChange} 
                name='password' 
                value={password} />
                <Button type='submit' buttonType='sign-in'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </form>
        </div>
    )
}

export default SignInForm;