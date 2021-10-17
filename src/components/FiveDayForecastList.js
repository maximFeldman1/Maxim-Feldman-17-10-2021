import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import FiveDayForecastCard from './FiveDayForecastCard'

import { conditionFiveDays } from '../actions/acuuWeatherApiActions'
import { useDispatch, useSelector } from 'react-redux'

const FiveDayForecastList = () => {
  const dispatch = useDispatch()

  const autocompleteSearchLocationReducer = useSelector(
    ({ autocompleteSearchLocationReducer }) => autocompleteSearchLocationReducer
  )

  const fiveDaysConditionReducer = useSelector(
    ({ fiveDaysConditionReducer }) => fiveDaysConditionReducer
  )

  const { fiveDaysCondition } = fiveDaysConditionReducer

  const { DailyForecasts } = fiveDaysCondition

  useEffect(() => {
    if (!autocompleteSearchLocationReducer.location.length) {
      //dispatch tel aviv 215854
      dispatch(conditionFiveDays('215854'))
    } else {
      //dispatch autocompleteSearchLocationReducer.location[0].Key
      dispatch(
        conditionFiveDays(autocompleteSearchLocationReducer.location[0].Key)
      )
    }
  }, [autocompleteSearchLocationReducer, dispatch])

  return (
    <Row className='py-3 mb-5'>
      {!DailyForecasts
        ? ''
        : DailyForecasts.map((x) => (
            <Col md={2} className='mx-auto my-2' key={x.EpochDate}>
              <FiveDayForecastCard
                date={x.Date}
                dayIcon={x.Day.Icon}
                nightIcon={x.Night.Icon}
                minTemp={x.Temperature.Minimum.Value}
                maxTemp={x.Temperature.Maximum.Value}
              />
            </Col>
          ))}
    </Row>
  )
}

export default FiveDayForecastList
