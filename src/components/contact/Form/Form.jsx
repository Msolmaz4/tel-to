import React, { useState } from 'react'

const Form =({conats, setContacts})=>{


    const [ form,setForm ] = useState({
        fullname:'',
        telnumber:''
    })

    const onChangeInput =(e)=>{
        // name degerlerni yakalip
        setForm({...form,[e.target.name]:e.target.value})

    }

    const onSubmit = (e)=>{
        e.preventDefault(e)
        // fullname ve telnumber bossa gonderme
        //if(form.fullname === '' || form.telnumber === '')
       //{ return false} ama hata verdi
         
        setContacts([...conats ,form])
        setForm({
            fullname:'',
            telnumber:''
        })
        
        //console.log(form)
    }

    return(
        <div>
             <form onSubmit={onSubmit}>
            <div>
               

              
            <input name='fullname' placeholder='fullName' 
            
            onChange={onChangeInput}/>
            </div>
         
         <div>
         <input name='telnumber'   placeholder='Tel Nummer' onChange={onChangeInput}/>
         </div>
         <div>
            <button>
                add
            </button>
            
         </div>
         </form>
        </div>
    )
}
export default Form