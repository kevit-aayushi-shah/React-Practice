import React, { useState } from "react";
import classes from "./form.module.css"
import Button from "./Button";
import ErrorModal from "./UI/ErrorModal";
const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();


  const handleNameChange = (event) => {
    setName(event.target.value)
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.trim().length===0 || age.trim().length===0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
      
    }
    if(+age<1)
    {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
   
    const data={
        name: name,
        age:age,
        id:Math.random().toString()
    }
    props.onSubmit(data)
    setName('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.form}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br></br>
        <input onChange={handleNameChange} value={name}/> 
        <br></br>
        <br></br>
        <label>Age(years)</label>
        <br></br>
        <input type="number" onChange={handleAgeChange} value={age}/>
        <br></br>
        <br></br>
       
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};
export default Form;
