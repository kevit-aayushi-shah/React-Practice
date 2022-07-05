import React from "react";

const Display=(props)=>{
    console.log(props.id)
    return (<div>
        <p key={props.id}>{props.name} ({props.age} Years)</p>
    </div>)
}

export default Display;