import { useEffect, useState } from 'react'
import { onSnapshot, query, collection, doc, setDoc, addDoc } from "firebase/firestore"

import { database } from "../config/firebase"

export const useDatabase = (content) => {

    const [data, setData] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    useEffect( () => {
        const q = query(collection(database, content))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            
            const queryResults = []
            
            querySnapshot.forEach((doc) => {
                queryResults.push({ 
                    id: doc.id,
                    data: doc.data()
                });
            });

            setData(queryResults)
            setLoaded(true)
        });
        return () => unsubscribe()

    }, [content] )

    return [data, isLoaded]
}

export const setOrder = async(fullname, email, address, city, ZIP, cartData) => {

    //Add a new document in collection "orders"
    await addDoc(collection(database, "orders"), {
        FullName: {fullname},
        Email: {email},
        Address: {address},
        City: {city},
        ZIP: {ZIP},
        CartData: {cartData}
    });
}