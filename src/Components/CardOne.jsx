import React from 'react';
import { useContext } from 'react';
import { Create_context } from './Context/CreateContext';
import Rain_img from "../Img/Rain_img.jpg";
import Clouds_img from "../Img/Clouds_img.jpg";
import Sun_img from "../Img/Sun_img.jpg";
import Haze_img from "../Img/Haze_img.jpg";


const CardOne = (props) => {

    const apiValue = useContext(Create_context);
    const { weatherData, isLoading } = apiValue;
    const {dt, main, name, sys, visibility, weather} = weatherData;
    // weather - array - id, main, description, icon.
    // const { humidity, pressure, temp } = main;
    // const { country } = sys;
    // const { deg, speed } = wind;

    // kelvin to celcius change
    let kel = main?.temp;
    let cel = (kel - 273.15).toFixed(2);

    let date = new Date(dt * 1000);
    let day = date.getDay();
    let month = Number(date.getMonth()) + 1;
    let year = date.getFullYear();

    let d = `${day}/${month}/${year}`;
    let x = weather?.[0].icon;

    let background = {
        Rain_img: { backgroundImage: `url(${Rain_img})` },
        Clouds_img: { backgroundImage: `url(${Clouds_img})` },
        Sun_img: { backgroundImage: `url(${Sun_img})` },
        Haze_img: { backgroundImage: `url(${Haze_img})` },
    }

    let currWeather = weather?.[0].main;
    let img;
    switch (currWeather) {
        case "Haze":
        case "Fog":
        case "Smoke":
            img = background.Haze_img;
            break;
        case "Clear":
            img = background.Sun_img;
            break;
        case "Clouds":
            img = background.Clouds_img;
            break;
        case "Rain":
            img = background.Rain_img;
            break;
        default:
            img = background.Sun_img;
    }

    return (
        <>
            {isLoading === "false" ?
                <div className="card1" style={img}>
                    <div className="date_time">
                        <p>{d}</p></div>
                    <div className="img_data">
                        <h1 className="temp">{cel}{'\u00b0'}</h1>
                        <img src={`http://openweathermap.org/img/w/${x}.png`} alt="weather_img" />
                    </div>
                    <div className="details">
                        <h4 className="name">{name} ({sys?.country}) </h4>

                        <h4>pressure: {main?.pressure}</h4>
                        <div className="temp_humadity">
                            <p>visibility: {visibility / 1000} km</p>
                            <p className='para_hum'>humidity: {main?.humidity}%</p>
                        </div>
                        <button className='moreInfo' onClick={props.showSlide} >More Info</button>
                    </div>
                </div> : <div className="loading">
                    <div className="rotator">
                    </div>
                </div>}
        </>
    );
}

export default CardOne