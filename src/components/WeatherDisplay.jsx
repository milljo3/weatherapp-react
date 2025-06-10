export default function WeatherDisplay({data, loading, error, unit}) {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!data) {
        return <p>No data yet. Search for a city!</p>;
    }

    return (
        <div className="weather-display">
            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather icon"
            />
            <h1>{data.main.temp}°{unit === 'metric' ? 'C' : 'F'}</h1>
            <p>{data.name}</p>
            <p>{data.weather[0].description}</p>
        </div>
    )
}