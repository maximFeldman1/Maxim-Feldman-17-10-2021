import React from 'react'
import { Container } from 'react-bootstrap'
import FavoriteList from '../components/FavoriteList'

const FavoriteScreen = () => {
  return (
    <Container className='py-3 text-center'>
      <h1>
        Favorites <i className='fas fa-heart' style={{ color: 'salmon' }}></i>
      </h1>
      <FavoriteList />
    </Container>
  )
}

export default FavoriteScreen
