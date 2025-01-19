
import { useNavigate } from "react-router-dom";
import LoginIcon from "./LoginIcon";



export default function Nav() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-800 h-16 w-full flex justify-between items-center p-5">
            <div className="text-white font-bold text-2xl px-20">Banking App</div>
            <div className="flex gap-5 text-white cursor-pointer font-semibold " >
              <div className="flex gap-5 text-white cursor-pointer font-semibold " >
              <LoginIcon label="Sign in" onClick={() => navigate("/Signin")} />
              </div>

              <div>
              <LoginIcon label="Sign up" onClick={() => navigate("/Signup")} />
              </div>
              
              
              
            </div>
        </div>
    );

}
