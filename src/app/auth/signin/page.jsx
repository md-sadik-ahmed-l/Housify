import React, { Suspense } from 'react';
import SigninPage from './SigninPage';

const SignIn = () => {
    return (
        <Suspense>

            <SigninPage></SigninPage>
        </Suspense>
    );
};

export default SignIn;