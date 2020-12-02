import React from 'react'

function Weather({data}) {
    if(data)
    {return(
        <div>
            <h1>{data.current.temp_c}°C in {data.location.name}</h1>
            <h3>{data.current.condition.text}</h3>
            <h2>Feels like {data.current.feelslike_c}°C</h2>
        </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default Weather;