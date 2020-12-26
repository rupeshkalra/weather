import React from 'react';
import Button from 'react-bootstrap/Button';
function Form(props){

    // const[val,setVal]=useState('');
  
    // function updateVal({ target })
    // {
    //     setVal({
    //         val: target.value     
    //     })
    // }
    return(
    <form onSubmit={props.Get}>
        <input type='text' name="city" placeholder="Enter City" />
        <br/><br/>
        <Button type="submit" variant="primary">Submit</Button>
    </form>
    );
}

export default Form;