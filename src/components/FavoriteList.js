import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FavoriteCard from './FavoriteCard'

import { getFavorites } from '../utils/ManageFavorites'

const FavoriteList = () => {
  const favorites = getFavorites()
  return (
    <Row>
      {!favorites.length
        ? ''
        : favorites.map((x) => (
            <Col md={3} key={x.key}>
              <FavoriteCard
                city={x.city}
                icon={x.icon}
                temp={x.temp}
                text={x.text}
              />
            </Col>
          ))}
    </Row>
  )
}

export default FavoriteList
