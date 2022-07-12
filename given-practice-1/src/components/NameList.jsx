import React from "react";
import Name from "./Name";

const NameList=(props)=>{
    return (<ul>
    {props.name.map((name) => (
      <Name
        key={name.id}
        name={name.name}
      />
    ))}
  </ul>)
}

export default NameList;