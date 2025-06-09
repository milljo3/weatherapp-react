import {useCallback} from "react";

const API_KEY = '2920fe3bb3f7a04eefb170f885d5a0bd';

export function useWeather(state, dispatch) {
    const fetchWeather = useCallback(async (city) => {
        dispatch({ type: "FETCH_START" });
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${state.unit}`
            );
            if (!response.ok) {
                dispatch({ type: "FETCH_FAIL", payload: "Failed to fetch weather" });
                return;
            }
            const data = await response.json();
            dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
        catch (error) {
            dispatch({ type: "FETCH_FAIL", payload: error });
        }
    }, [dispatch, state.unit]);

    return {fetchWeather};
}