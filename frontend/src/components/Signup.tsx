import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Signup() {
    const navigate = useNavigate();

   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [WalletPin, setWalletPin] = useState(""); 

    // Handle form submission
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }


        if (!firstName || !lastName || !email || !password || !confirmPassword || !WalletPin) {
            alert("Please fill out all fields!");
            return;
        }

        axios.post("http://localhost:3001/api/user/signup", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            WalletPin
        })
        .then((res) => {
            console.log(res.data);
            navigate("/Signin");
        })
        .catch((err) => {
            console.log(err);
        });
        
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center" >

                <h1 className="font-bold text-black text-4xl m-5 ">Create Your Account</h1>

                <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-center items-center p-5 shadow-2xl h-screen w-96"
>
    <label className="m-2">
        First Name
        <br />
        <input
            className="p-4 border-2"
            type="text"
            placeholder="Enter your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
    </label>

    <label className="m-2">
        Last Name
        <br />
        <input
            className="p-4 border-2"
            type="text"
            placeholder="Enter your Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
    </label>

    <label className="m-2">
        Email
        <br />
        <input
            className="p-4 border-2"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </label>

    <label className="m-2">
        Password
        <br />
        <input
            className="p-4 border-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    </label>

    <label className="m-2">
        Confirm your password
        <br />
        <input
            className="p-4 border-2"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
    </label>

    <label className="m-2">
        WalletPin
        <br />
        <input
            className="p-4 border-2"
            type="password"
            placeholder="Enter your Wallet Pin"
            value={WalletPin}
            onChange={(e) => setWalletPin(e.target.value)}
        />
    </label>

    <div className="m-2 w-72 h-8 bg-teal-100 rounded-full font-semibold flex items-center justify-center">
        <button type="submit">Sign Up</button> {/* Ensure this button has type="submit" */}
    </div>

    <p>------------------or--------------------</p>

    <div className="m-2 w-72 h-8 bg-teal-100 rounded-full font-semibold flex items-center justify-center">
        <button
            type="button"
            onClick={() => navigate("/Signin")}
        >
            Sign In
        </button>
    </div>
</form>


                <div>

                    
                </div>
            </div>
        </>
    );
}
