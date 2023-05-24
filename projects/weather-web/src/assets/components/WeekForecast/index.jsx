import React, { useState } from 'react'
import './index.css'
import WeekForecastItem from '../WeekInfoItem'
import TodayForecast from '../TodayForecast'
const WeekForecast = ({ weekForecast }) => {
  const [isShow, setIsShow] = useState(false)

  function renderWeekInfoItem(item) {
    const itemDate = new Date(item.date_epoch * 1000)
    const currentDate = new Date().getDate()
    return (
      <WeekForecastItem
        dayForecast={itemDate.getDate() === currentDate ? "Today" : itemDate.getDate()}
        conditionIcon={item.day.condition.icon}
        conditionText={item.day.condition.text}
        maxTempC={item.day.maxtemp_c}
        minTempC={item.day.mintemp_c}
      />
    )
  }
  return (<>
    <section className='forecast-container'>
      <section className={`weekForecast-container ${isShow ? "is-Show" : ""}`}>
        <p>7-Day Forecast</p>
        <ul className='weekForecast-weekInfo'>
          {weekForecast.map(renderWeekInfoItem)}
        </ul>
        <button onMouseEnter={() => setIsShow(!isShow)} className='weekForecast-btnZoom'></button>
      </section>
      <ul>
        <TodayForecast/>
      </ul>
    </section>
  </>
  )
}

export default WeekForecast
