import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Addblog from './components/Addblog.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [update, setUpdate] = useState(true)
  useEffect(() => {
    $.ajax({
      url: '/api/items/',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  },[update])
  const add =(description,title,imageUrl)=>{
    $.post("/api/items/add",{description:description,title:title,imageUrl:imageUrl}).then((result)=>{
      setUpdate(!update)
    }).catch((error)=>{
      console.log(error);
    })
  }
  const delet = (id)=>{
    $.ajax({
        url:`/api/items/${id}`,
        type:'DELETE',
        success:function(result){
          setUpdate(!update)
        },
        error:function(error){
          console.log(error);
        }
    })
  }
const updatem =(id,description)=>{
  console.log('sdfqdgfsdg',description,id);
 }
  return (
    <div className='blog'id="blog" style={{backgroundColor:'grey'}}>
      <h1 > Best Time Football</h1>
      < Addblog add={add}/>
      <List items={items} updatem={updatem} del={delet} setUpdate={setUpdate} update={update}  />
      {/* <Update  /> */}
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


  