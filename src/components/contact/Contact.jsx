import React , { useEffect, useState} from 'react'
import Form from './Form/Form'
import List from './List/List'


const Contact = ()=>{


    const [conats,setContacts] =useState([])



    useEffect(()=>{
            console.log(conats)
    },[conats])


    return(
        <div>
             contact 
             <List/>
             <Form 
             conats={conats}
             setContacts={setContacts}
            />   
            

        </div>
    )
}

export default Contact