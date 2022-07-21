import React , { useEffect, useState} from 'react'
import Form from './Form/Form'
import List from './List/List'



const Contact = ()=>{


    const [conats,setContacts] =useState([
        {
        fullname:'adana',
        telnumber:11111111
    },
    {
        fullname:'bursa',
        telnumber:222222111
    },
    {
        fullname:'ordu',
        telnumber:222222111
    },

])



    useEffect(()=>{
            console.log(conats)
    },[conats])

    


    return(
        <div>
             contact 
             
             <List conats={conats}
             setContacts={setContacts}
             s/>
             <Form 
             conats={conats}
             setContacts={setContacts}
            />   
            

        </div>
    )
}

export default Contact