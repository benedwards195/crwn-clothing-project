import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../sign-up/sign-up-form.component";
import SignInForm from "../sign-in/sign-in-form.component";

import './authentication.styles.scss';

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
    useEffect(() => {
        async function fetchData() {
        const response = await getRedirectResult(auth);
        console.log(response);
        }
        fetchData();
    }, []);

    const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    };

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({user});
        };

    return (
    <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
    </div>
    );
};

export default Authentication;