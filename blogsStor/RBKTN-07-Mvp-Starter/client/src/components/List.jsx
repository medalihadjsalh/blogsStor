import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div className="container">
    <h4></h4>
    <div class="wrapper">
 

    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} del={props.del} updatem={props.updatem} setUpdate={props.setUpdate} update={props.update} />
      </div>
    
    ))} </div>
  </div>
);

export default List;
