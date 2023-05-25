import React from 'react'
import './index.css'
import WeatherInfo from '../WeatherInfo'
import DayForecast from '../DayForecast'

const WeatherSection = ({ currentIcon, location, currentTemp, rainChance, timeLineList, isShow }) => {
  return (
    <section className="weather-section">
      <WeatherInfo
        currentIcon={currentIcon}
        location={location}
        currentTemp={currentTemp}
        rainChance={rainChance} />
      <DayForecast
        dayForecastTitle="Today's"
        isShow={isShow}
        amountItem="8"
        timeLineList={timeLineList}
      />
    </section>
  )
}

export default WeatherSection
