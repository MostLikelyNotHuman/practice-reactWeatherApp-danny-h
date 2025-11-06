import { useEffect, useRef, useState } from "react";
import { weatherData } from "../weatherData";

const CityForecast = ({ city }) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [city]);

    const weatherDataRef = useRef(null);

    const handleScroll = (ref) => {
        weatherDataRef.current.scrollIntoView()
    };

    return (
        <>
            <button value='seeDetails' onClick={handleScroll}>See Details</button>
            {isLoading ? 'Loading...' : 
            <div ref={weatherDataRef}>
                <p>{weatherData[city].summary}</p>
                <p>{weatherData[city].details}</p>
            </div>
            }
        </>
    );
}



export default CityForecast;