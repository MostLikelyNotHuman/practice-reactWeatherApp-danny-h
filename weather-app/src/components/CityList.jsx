const CityList = ({ currentCity, setCurrentCity }) => {

    const updateCity = (event) => {
        let newCity = event.target.attributes.value.value;
        setCurrentCity(newCity);
        console.log(currentCity);
    };

    return (
        <>
            <h2>Select city to view weather information</h2>
            <ul onClick={updateCity}>
                <li value='NewYork'>New York</li>
                <li value='London'>London</li>
                <li value='Tokyo'>Tokyo</li>
            </ul>
        </>
    );

}

export default CityList;
