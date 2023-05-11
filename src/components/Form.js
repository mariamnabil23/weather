import { useState } from "react";
import Weather from "./Weather";


function Form(props){

    const[city2 , setCity] = useState('');
    const[country2 , setCountry] = useState('');
    const[tempreature , setTempreature] = useState('');
    const[humidity , setHumidity] = useState('');
    const[description , seDescription] = useState('');
    const[wind , setWind] = useState('');
    const[error , setError] = useState('');


    //submition function 
    const getWeather =(e)=>{
        //prevent the default submition
        e.preventDefault();
        console.log("weather");
        //put the entered city & country to the variables
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.log(city);
        console.log(country);
        //api_key from the open weather map website
        const api_key = "887e6bbe201889ebca380d3b230f07cd";
        //get dtat of the entered city & country from this api
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`)
        .then( (res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(city && country){
                setCity(data.name);
                setCountry(data.sys.country);
                setTempreature(data.main.temp);
                setHumidity(data.main.humidity);
                seDescription(data.weather[0].description);
                setWind(data.wind.deg);
                setError('');
            }else{
                setError("ERROR: PLEAZE ENTER DATA");
            }
        })
    }

    return(
        <div className="form-container">
            <form onSubmit={getWeather}>
                <h1 className="form-header">what the weather like ?</h1>
                <input type="text" name="city" placeholder="Enter your city"></input>
                <input type="text" name="country" placeholder="Enter your country"></input>
                <button>get weather</button>
            </form>

            <Weather city2={city2} country2={country2} tempreature={tempreature} humidity={humidity} description={description} wind={wind} error={error} />
        </div>
    )
};

export default Form;