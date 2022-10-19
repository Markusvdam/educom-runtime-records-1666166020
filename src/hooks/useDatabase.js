import { useEffect, useState } from 'react'
import { onSnapshot, query, collection } from "firebase/firestore"

import { database } from "../config/firebase"

const useDatabase = (content) => {

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

export default useDatabase