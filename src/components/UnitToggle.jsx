export default function UnitToggle({unit, onUnitChange}) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="metric"
                    checked={unit === 'metric'}
                    onChange={(e) => onUnitChange(e.target.value)}
                />
                °C
            </label>
            <label>
                <input
                    type="radio"
                    value="imperial"
                    checked={unit === 'imperial'}
                    onChange={(e) => onUnitChange(e.target.value)}
                />
                °F
            </label>
        </div>
    )
}