import React, { Suspense } from 'react';
import SignupPage from './SignUpPage';

const SignUp = () => {
    return (
        <Suspense>
            <SignupPage></SignupPage>
        </Suspense>
    );
};

export default SignUp;