import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body=()=>{
    //Dispatch hook for Action Dispatch
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            //Dispatching Addduser Action
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        } else {
            // User is signed out
            //Dispatching RemoveUser Action
            dispatch(removeUser());
        }
        });
    },[])

    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;