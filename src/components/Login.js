import Header from "./Header";
import { useState } from "react";
const Login=()=>{
    const [signType,setSignType]=useState(true);
    const toggleSignInForm=()=>{
        setSignType(!signType);
    }
    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg" alt="login-pic"/>
        </div>
        <form className="w-3/12 my-36 mx-auto left-0 right-0 absolute p-12 bg-black opacity-90 text-white">
        <h1 className="font-bold text-3xl py-4">{signType? "Sign In" : "Sign Up"}</h1>
            {!signType && <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="password" placeholder="Name" />}
            <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="text" placeholder="Email Address" />
            <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="password" placeholder="Password" />
            <button className="p-3 my-5 mx-1 w-full bg-red-500 rounded-lg">{signType? "Sign In" : "Sign Up"}</button>
            <p className="cursor-pointer" onClick={toggleSignInForm}>{signType? "New to Netflix? Sign Up Now" : "Already Registered User? Sign In Now"}</p>
        </form>
        </div>
    )
}

export default Login;