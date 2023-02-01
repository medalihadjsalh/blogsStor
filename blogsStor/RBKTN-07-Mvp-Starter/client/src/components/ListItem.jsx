import React, { useState } from 'react';
import axios from 'axios';
const ListItem = (props) => {
  console.log(props.item._id)
  console.log(props.updatem);
  const [show, setshow] = useState(false)
  let inputValue=""
  return <div>
    {console.log(props.item)}
    <img  className ="img"src={props.item.imageUrl} />
    <br/>
    { props.item.title }
    <br/>
    { props.item.description }
  <div>
    <button onClick={()=>props.del(props.item._id)} className=" button-34">delete </button>
   {show || <button onClick={()=>{setshow(!show)
      props.updatem(props.item._id)}} className=" button-34">update</button>}
    {show && <>
    <input type="text" onChange={(e)=>{
      inputValue=e.target.value
    }}/>
    <span>
    <button onClick={()=>{
      setshow(!show)
       axios
       .put(`http://localhost:3000/api/items/put/${props.item._id}`,
         {description:inputValue}).then((res)=>{
         console.log(res);
       })
       .catch(error => {
          console.log(error);
       })
       props.setUpdate(!props.update)
    }}>update</button>
    </span>
    </>}
    </div>
  </div>

}

export default ListItem;



// const[title,setTitle]=useState('')
// const [description,setDescription]=useState('')
// const[imageUrl,setImageUrl]=useState('')

// <button onClick={()=>{setUp(!up)}}>
//       {""} update
//     </button>{up && (
//         <div>
//           <input type="text" onChange={(e) =>(e.target.value)} />
//           <button onClick={() => props.upda(, props.item._id)}>
//             {" "}
//             update
//           </button>