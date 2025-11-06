import { useState } from 'react'
import './App.css'
import CityForecast from './components/CityForecast'
import CityList from './components/CityList'


function App() {

  const [currentCity, setCurrentCity] = useState("");

  return (
    <>
      <CityList currentCity={currentCity} setCurrentCity={setCurrentCity}/>
      {currentCity && <CityForecast city={currentCity}/>}
    </>
  )
}

export default App
