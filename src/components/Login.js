import Header from "./Header";
import { useState, useRef} from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [signType,setSignType]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const email=useRef("");
    const password=useRef("");
    const navigate=useNavigate();
    const toggleSignInForm=()=>{
        setSignType(!signType);
    }
    const handleButtonClick=(e)=>{
        setErrorMessage(checkValidData(email.current.value,password.current.value));
        console.log(email.current.value,password.current.value);
        if(errorMessage) return
        //Sign In/Up Logic
        if(!signType){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Redirecting it to /browse
            navigate("/browse");
            console.log("Logged In:",user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage+" "+errorCode);
                console.log("Error:",errorMessage,errorCode);
        });

        }else{
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
            const user = userCredential.user;
            // Redirecting it to /browse
            navigate("/browse");
            console.log("Logged In:",user);
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage+" "+errorCode);
                console.log("Error:",errorMessage,errorCode);
            });
        }
        e.preventDefault();
    }

    
    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg" alt="login-pic"/>
        </div>
        <form className="w-3/12 my-36 mx-auto left-0 right-0 absolute p-12 bg-black opacity-90 text-white">
        <h1 className="font-bold text-3xl py-4">{signType? "Sign In" : "Sign Up"}</h1>
            {!signType && <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="text" placeholder="Name"/>}
            <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="text" placeholder="Email Address" ref={email}/>
            <input className="p-3 my-3 mx-1 w-full bg-gray-500" type="password" placeholder="Password" ref={password}/>
            <p className="font-bold p-3 my-2 text-lg text-red-600">{errorMessage}</p>
            <button onClick={handleButtonClick} className="p-3 my-5 mx-1 w-full bg-red-500 rounded-lg">{signType? "Sign In" : "Sign Up"}</button>
            <p className="cursor-pointer" onClick={toggleSignInForm}>{signType? "New to Netflix? Sign Up Now" : "Already Registered User? Sign In Now"}</p>
        </form>
        </div>
    )
}

export default Login;