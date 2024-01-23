import React from 'react';
import '../Css/AccountLogin.css';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <>
            <div className="AccountLoginMain">

                <form className="signup" onsubmit="return false" autoComplete="off">
                    <h1>Create account</h1>
                    <h2>
                    <Link to="/accountsignin">
                        <span>Sign In</span>
                    </Link>
                    </h2>
                    <div className="signup__field">
                        <input className="signup__input" type="text" name="username" id="username" required />
                        <label className="signup__label" htmlFor="username">Username</label>
                    </div>
                    <div className="signup__field">
                        <input className="signup__input" type="text" name="email" id="email" required />
                        <label className="signup__label" htmlFor="email">Email</label>
                    </div>
                    <div className="signup__field">
                        <input className="signup__input" type="password" name="password" id="password" required />
                        <label className="signup__label" htmlFor="password">Password</label>
                    </div>
                    <button>Sign up</button>
                </form>
            </div>

        </>
    );
}

export default Account;
