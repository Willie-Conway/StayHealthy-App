import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import "./Sign_Up.css"
import { API_URL } from '../../config';

function Sign_Up() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState({});
    
    const handleReset = ()=>{
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setShowerr('')
    }

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();

        } else {
            if (typeof json.error === 'string') {
                setShowerr({ general: json.error });
            } else {
                const fieldErrors = {};
                    json.error.forEach(err => {
                        fieldErrors[err.param] = err.msg;
                    });
                setShowerr(fieldErrors);
            }
        }
    };

  return (
    <div className="container">
        <div className="signup">
            <div className="signup-text">
                <h1>Sign Up</h1>
                <p>Already a member?<span><Link to="/login"> Login</Link> </span> </p>
            </div>

            <div className="signup-form">
                <form method='POST' onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="form-control"
                            placeholder="Enter your name" 
                            aria-describedby="helpId"    
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        {showerr.name && (<small style={{ color: 'red' }}>{showerr.name}</small> )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            required  
                            className="form-control" 
                            placeholder="Enter your phone" 
                            aria-describedby="helpId"
                            pattern="\d{10}" 
                            title="Please enter a 10-digit phone number"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        {showerr.phone && (<small style={{ color: 'red' }}>{showerr.phone}</small>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="form-control" 
                            placeholder="Enter your email" 
                            aria-describedby="helpId"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        {showerr.email && (<small style={{ color: 'red' }}>{showerr.email}</small>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="form-control" 
                            placeholder="Enter your password" 
                            aria-describedby="helpId"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {showerr.password && (<small style={{ color: 'red' }}>{showerr.password}</small>)}
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={handleReset}>Reset</button>
                    </div>
                    {showerr.general && (<small style={{ color: 'red' }}>{showerr.general}</small>)}

                </form>    
            </div>
        </div>    
    </div>
  );
};

export default Sign_Up