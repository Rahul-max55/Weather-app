import React, { useContext } from 'react';
import { Create_context } from './Context/CreateContext';


const CardTwo = (props) => {

    const apiValue = useContext(Create_context);
    const { weatherData } = apiValue;
    const { base, weather, wind, sys } = weatherData;
    // weather - array - id, main, description, icon.
    // const { humidity, pressure, temp } = main;
    // const { country } = sys;
    // const { deg, speed } = wind;
    function sunDate(sun) {
        let date = new Date(sun * 1000);
        let h = date.getHours() % 12;
        let m = date.getMinutes();
        let t = `${h}:${m}`;
        return t;
    }
    let sunsetTime = sunDate(sys?.sunset);
    let sunriseTime = sunDate(sys?.sunrise);
    let wspeed = ((wind?.speed) * 3.6).toFixed(2);



    return (
        <>
            <div className="card2" style={{ width: props.show }}>
                <div className="Speed_visibility">
                    <p className="speed">Wind Speed: {wspeed}Km/hr</p>
                    <p className="visibility">wind Deg :{wind?.deg}{'\u00b0'}</p>
                </div>
                <p>weather : {weather?.[0].main}</p>
                <p className="base">Station: {base}</p>
                <div className="rise_set">
                    <p className="sunrise">sunrise: {sunriseTime}AM</p>
                    <p className="sunset">sunset: {sunsetTime}PM</p>
                </div>
            </div>
        </>
    );
}

export default CardTwo