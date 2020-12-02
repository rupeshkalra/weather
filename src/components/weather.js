import React from 'react'

function Weather({data}) {
    if(data)
    {return(
         <h1>{data}°C</h1>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default Weather;