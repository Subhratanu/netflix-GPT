import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useState,useEffect } from "react";

const Header=()=>{
    const [showSignOut,setShowSignOut]=useState(false);
    const navigate=useNavigate();
    //Subscribing to the Store
    const user = useSelector((store)=>store.user);
    console.log(user);
    const location=useLocation();
    console.log(location.pathname)
    useEffect(()=>{
        if(location.pathname!=="/"){
            setShowSignOut(true);
        }
    },[])
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed Out Successfully");
          }).catch((error) => {
            // An error happened.
            console.log("Error Signing Out:",error);
          })
    }
    return(
        <div>
            <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black to-transparent z-10">
                <img className="w-52" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
                {showSignOut && 
                    <div className="flex justify-between">
                        <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="avatar" className="w-8 h-8 rounded cursor-pointer"/>
                        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;