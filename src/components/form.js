import React from 'react';

function Form(props){
    return(
    <form onSubmit={props.Get}>
        <input type='text' placeholder="Enter City" name="city"/>
        <br/><br/>
        <button >Submit</button>
    </form>
    );
}

export default Form;