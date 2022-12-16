import React, { useReducer, useEffect, useState } from "react";
import { Create_context } from "./CreateContext";
import axios from "axios";
import Reducer from "./Reducer";


const NodeContext = (props) => {

    const [searching, setSearching] = useState("indore")

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${searching === "" ? "Indore" : searching}&appid=76a6d41b1e1e532efa6b716581a90b99`;

    const InitialState = {
        weatherData: "",
        isLoading: "true",
    }


    const handleChange = (e) => {
        let val = e.target.value;
        setSearching(val);
    }

    const [state, dispatch] = useReducer(Reducer, InitialState);

    const setWeatherData = async (api) => {
        try {
            let res = await axios.get(api);
            let data = await res.data;
            // console.log(data);
            dispatch({ type: "SETTING_WEATHER_DATA", payload: data })
        } catch (e) {
            let value = e.response.status;
            dispatch({ type: "HANDLE_ERRORS", payload: value })
        }
    }

    useEffect(() => {
        setWeatherData(API)
    }, [API]);


    return (
        <>
            <Create_context.Provider value={{ ...state, handleChange , API}}>
                {props.children}
            </Create_context.Provider>
        </>
    )
}
export default NodeContext;