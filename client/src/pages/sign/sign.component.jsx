import React from 'react'
import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const Sign=()=> (
    <div className="sign-in-and-sign-up">
     <SignIn/>
     <SingUp/>
    </div>
)

export default Sign;
