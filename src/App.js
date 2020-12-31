import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import Weather from './components/weather';

function App() {
 const[state,setState]=useState(["ok"]);
  
  var resStatus;
  function get(e){
    e.preventDefault();
  const city = e.target.elements.city.value
  const ke=process.env.REACT_APP_KEY;
   fetch(`https://api.weatherapi.com/v1/current.json?key=${ke}&q=${city}`)
   .then(res => {
    resStatus = res.status
    return res
  })
  .then( res => res.json())
  .then(function(data){
  setState({
    temp:data,
    result:resStatus,
    city:city
  })
  });

  
}

  return(
    <div className="App"> 
      <h3>WEATHER APP</h3>
      <hr/>
      <Form Get={get}/>
      <Weather data={state.temp} res={state.result} city={state.city}/>
    </div>
  );
}

export default App;
