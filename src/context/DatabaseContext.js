import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from '../config/firebase';
import { 
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    setDoc,
    doc,
    query,
    orderBy
 } from "firebase/firestore";

//  CREATE COLLECTION REFERENCES
const userCollection = collection(db, 'users');

export const FirestoreContext = createContext();

export const FirestoreContextProvider = ({ children }) => {
    
    // GET USER COLLECTION  
    const getUsers = () => {
         return getDocs(userCollection);      
    }

    // GET USER DATA 
    const getCurrentUser = async (uid) => {
        // CREATE DOCUMENT REFERENCES 
        const currentUserRef = doc(db, "users_new", uid);
        return await getDoc(currentUserRef);
    }

    // CREATE USER DATA
    const createUser = async (data) => {
        const userRef = doc(db, "users", data.phone);
        await setDoc(userRef, data);
    }

    // UPDATE USER
    const updateUser = async (data) => {
        const userRef = doc(db, "users", data.phone);
        await updateDoc(userRef, data);
    }

    

    return( 
        <FirestoreContext.Provider value={{
            getUsers, 
            getCurrentUser, 
            createUser,
            updateUser
        }}>
            { children }
        </FirestoreContext.Provider>
    )
}


export const DatabaseService = () => {
    return useContext(FirestoreContext);
}

