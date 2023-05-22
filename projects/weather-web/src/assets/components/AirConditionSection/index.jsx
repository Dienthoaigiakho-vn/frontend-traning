import React from 'react'
import './index.css'

const AirConditionSection = () => {
  return (
    <section className='airCondition-section'>
      <p className='airCondition-title'>Air conditions</p>
      <div className='airCondition-information'>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" /><path d="M24 17V30" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        <span className='airCondition-infoTitle'>Real Feel</span>
      </div>
      <span className='airCondition-data'>30*</span>
    </section>
  )
}

export default AirConditionSection
