export default function SearchForm ({city, onCityChange, onSearch}) {
    const handleSubmit = event => {
        event.preventDefault();
        onSearch();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
             value={city}
             onChange={(e) => onCityChange(e.target.value)}
             placeholder="Enter city"
            />
            <button type="submit">Search</button>
        </form>
    )
}