import React from 'react'

function Weather({data,res,city}) {
    
    if(res>220 && city)
    {
        return(
            <div className="data">
                <h2>{data.error.message}</h2>
            </div>
        );
    }
    else if(res>220)
    {
        return(
            <div className="data">
                <h2>Please Enter a city Name!</h2>
            </div>
        );
    }
    else if(data!=null)
    {
        return(
        <div className="data"> 
               <h5>{data.location.localtime}</h5>
               <hr/>
               <h1>{data.current.temp_c}°C</h1>
               <hr/>
               <h3>{data.current.condition.text}</h3>
               <hr/> 
               <h3>Feels like {data.current.feelslike_c}°C</h3>
               <hr/> 
               <h3>Wind: {data.current.wind_kph} km/h</h3>
        </div>
        );
    }
    else
    {
        return(
            <div></div>
        );
    }
}

export default Weather;