

function Weather(props){
    return(
        <div className="weather-container">
        {/* if condition (and operator) */}
        {props.city2 && <p className="weather-key">City: <span className="weather-value"> {props.city2} </span></p> }
        {props.country2 && <p className="weather-key">Country: <span className="weather-value">{props.country2}</span></p>}
        {props.tempreature && <p className="weather-key">Tempreature: <span className="weather-value">{props.tempreature}c</span></p>}
        {props.humidity && <p className="weather-key">Humidity: <span className="weather-value">{props.humidity}</span> </p>}
        {props.description && <p className="weather-key">Description: <span className="weather-value">{props.description}</span> </p>}
        {props.wind && <p className="weather-key special">Wind: <span className="weather-value">{props.wind}deg</span></p>}
        <p className="msg-error">{props.error}</p>
        </div>
    )
};

export default Weather;