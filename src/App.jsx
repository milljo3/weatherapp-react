import './App.css'
import {useEffect, useReducer} from "react";
import {useWeather} from "./hooks/useWeather.jsx"
import {initialState, weatherReducer} from "./reducers/weatherReducer.jsx";
import SearchForm from "./components/SearchForm.jsx";
import UnitToggle from "./components/UnitToggle.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const {fetchWeather} = useWeather(state, dispatch);

    useEffect(() => {
        const refetch = async () => {
            if (state.city && state.weatherData) {
                await fetchWeather(state.city);
            }
        };
        refetch().catch((err) => console.log(err));
    }, [state.unit]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchForm
        city={state.city}
        onCityChange={(city) => dispatch({
          type: "SET_CITY",
          payload: city
        })}
        onSearch={() => fetchWeather(state.city)}
      />
      <UnitToggle
        unit={state.unit}
        onUnitChange={(unit) => dispatch({
          type: "SET_UNIT",
          payload: unit
        })}
      />
      <WeatherDisplay
        data={state.weatherData}
        loading={state.loading}
        error={state.error}
      />
    </div>
  )
}

export default App
