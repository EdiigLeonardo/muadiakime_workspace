'use-client'
import React from 'react';
import SignInPage from './auth/sign-in/page';
import SignUpPage from './auth/sign-up/page';

export default function AuthRoutes({isAuthenticated}: {isAuthenticated?: boolean}) {
    return (
        <div>
            {isAuthenticated ? <SignInPage /> : <SignUpPage />}
        </div>
    );
}