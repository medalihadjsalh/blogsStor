import React, { useState } from 'react'

function Addblog(props) {
    const[title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const[imageUrl,setImageUrl]=useState('')
    
  return (
    <div className='input'>
  Title : <input type='text' onChange={(e)=>{setTitle(e.target.value)}}/>
   Description: <input type='text' onChange={(e)=>{setDescription(e.target.value)}}/>
    ImageUrl<input type='text' onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <button onClick={()=>{props.add(title,description,imageUrl)}}className=" button-34">ADD</button>

    </div>
  )
}

export default Addblog