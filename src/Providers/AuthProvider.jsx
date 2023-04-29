import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/Firebase.config';


 export const AuthContext = createContext(null)
const auth =getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser ]=useState(null);
const [loading, setLoading]=useState(true);




const createUser= (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password);
}
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}


useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
        console.log('logged in user inside auth state observer',loggedUser);
        setUser(loggedUser);
        setLoading(false);

    })
    return ()=>{
    unsubscribe()
    }
},[])


const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading

}



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
