import { object } from "prop-types";
import { useState } from "react";

function Form() {


const [name,setName]=useState('');
const [errors,setErrors]=useState({});
const handleSubmit=(e)=>{
    const validationErrors={};
    e.preventDefault();
   
    if(!name){
        validationErrors.name="Nmae cannot be Empty";
    }
    if(Object.keys(validationErrors).length>0){
        setErrors(validationErrors);
    }
    else{
        alert("form submitted"+name);
        setErrors({});
    }
}

    return ( 
    <div className="container">
        <h1>Form Validations</h1>
        <form on onSubmit={handleSubmit}>
            <input type="text" className={`form-control ${errors.name ? 'is-invalid':''}`} value={name} id="name" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            
            <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>

    </div> );
}

export default Form;