import React from "react";
import Card from "./UI/Card";

const Display=(props)=>{
    // console.log(props.id)
    return (<Card >
        <p>{props.name} ({props.age} Years)</p>
        </Card>)

}

export default Display;