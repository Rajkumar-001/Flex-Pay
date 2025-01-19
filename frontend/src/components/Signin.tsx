
import { useNavigate } from 'react-router-dom';
import logo from '../assets/iconF.png';
import  { useState } from 'react';
import axios from 'axios';

import backgroundImage from '../assets/Signin.png';





export default function Signin() {
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

    <div className=" h-screen w-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` 
    ,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="justify-center items-center  p-5 shadow-2xl flex  flex-col h-4/6 w-96 ">
        <div className="">
        <img  className="h-24 w-24" src={logo} alt="icon" />
        </div>
        <input onChange={(e) => setUsername(e.target.value)}
            className="m-3 p-5 border-solid border-2 border-gray-300 rounded-lg w-80"
            type="text"
            placeholder="Enter your email"
          />
          <input onChange={(e) => setPassword(e.target.value)}
            className="m-3 p-5 border-solid border-2 border-gray-300 rounded-lg w-80"
            type="password"
            placeholder="Enter your password"/>

          <button
            onClick={() => {
              axios
                .post("http://localhost:3001/api/user/signin", {
                  email: username, 
                  password,
                })
                .then((res) => {
                  console.log("Response:", res.data);

                  if (res.data.sucess) {
                    const token = res.data.token; 
                    localStorage.setItem("authToken", token);
                    alert("Login successful!");
                    navigate("/Dashboard"); 
                  }
                })
                .catch((err) => {
                  console.error("Error:", err.response ? err.response.data : err.message);
                  alert(err.response?.data?.error || "An error occurred.");
                });
            }}
            className="m-5 h-11 w-80 bg-teal-100 rounded-full font-semibold flex items-center justify-center"
          >
            Sign in
          </button>


          <p>------------------or--------------------</p>

          <button onClick={()=>{ navigate("/Signup")}} className="m-5 h-11 w-80 bg-teal-100 rounded-full font-semibold flex items-center justify-center border-gray-300">
            Sign Up
          </button>

        

      </div>





    </div>
     
    </>
  )
}
