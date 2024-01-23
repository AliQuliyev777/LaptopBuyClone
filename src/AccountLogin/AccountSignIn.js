import React from 'react';
import '../Css/AccountLogin.css';
import { Link } from 'react-router-dom';

const AccountSignIn = () => {
    
    return (
        <>
            <div className="AccountLoginMain">

                <form className="signup" onsubmit="return false" autoComplete="off">
                    <h1>Sign In </h1>
                    <h2>Need an account?
                    <Link to="/account">
                        <span>Sign In</span>
                    </Link></h2>
                    <div className="signup__field">
                        <input className="signup__input" type="text" name="email" id="email" required />
                        <label className="signup__label" htmlFor="email">Email</label>
                    </div>
                    <div className="signup__field">
                        <input className="signup__input" type="password" name="password" id="password" required />
                        <label className="signup__label" htmlFor="password">Password</label>
                    </div>
                    <button>Sign In</button>
                </form>
            </div>

        </>
    );
}

export default AccountSignIn;
