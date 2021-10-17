import React from 'react'
import { Container } from 'react-bootstrap'
import CurrentWeatherCard from '../components/CurrentWeatherCard'
import FiveDayForecastList from '../components/FiveDayForecastList'
import SearchLocation from '../components/SearchLocation'

// import { Autocomplete } from '@material-ui/lab'

const HomeScreen = () => {
  return (
    <Container className='py-3'>
      <SearchLocation />
      <CurrentWeatherCard />
      <FiveDayForecastList />
    </Container>
  )
}

export default HomeScreen
