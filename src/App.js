import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import Weather from './components/weather';

function App() {
 const[state,setState]=useState([]);
  
  function get(e){
  e.preventDefault()
  const city = e.target.elements.city.value
   fetch(`http://api.weatherapi.com/v1/current.json?key=46c6694771ae42f0ab090152200212&q=${city}`)
  .then( res => res.json())
  .then(function(data){
    console.log(data);
  setState({
    temp:data
  })
  });

  
}

  return(
    <div className="App"> 
      <h3>WEATHER APP</h3>
      <Form Get={get}/>
      <Weather data={state.temp}/>
    </div>
  );
}

export default App;
