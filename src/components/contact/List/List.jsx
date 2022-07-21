import React, { useState } from 'react'



const List = ({conats,setContacts})=>{


    const [inputText,setInputText] = useState('')


 const filterd = conats.filter((item)=>(
    Object.keys(item).some((key)=>
    item[key]
    .toString()
    .toLowerCase()
    .includes(inputText.toLocaleLowerCase()))
 ))

 console.log(filterd)

 const handdelete =(id)=>{
    const b = conats.filter((it)=>it.id !== id)
    setContacts(b)
 }

    return(
        <div>

     <h1>Contact</h1>
  <input
  value={inputText}
   onChange={(e)=>setInputText(e.target.value)}/>


        {
            filterd.map((e,i)=>
               
            (
                <div className='filt' key={i}>
                    <span > {e.fullname}</span>
            <span>{e.telnumber}</span>
                    

                    <button onClick={(id)=>handdelete(id)}>dlete</button>
                </div>
                
            ))
        }

        <div>{filterd.length}</div>
        </div>
    )
}
export default List