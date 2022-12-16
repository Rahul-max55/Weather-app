const Reducer = (state, action) => {

    if (action.type === "SETTING_WEATHER_DATA") {
        console.log(action.payload);
        // console.log(action.payload?.response);

        return {
            ...state,
            weatherData: action.payload,
            isLoading: "false",
        }
    }
    if (action.type === "HANDLE_ERRORS") {
        return {
            ...state,
            weatherData: "",
            isLoading: "true",
        }
    }
}

export default Reducer;