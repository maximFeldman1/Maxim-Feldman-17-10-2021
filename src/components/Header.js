import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Switch from '@material-ui/core/Switch'


import { ToggleTheme } from '../actions/themeActions'
import { ToggleDegrees } from '../actions/degreesActions'

const Header = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer)
  const dispatch = useDispatch()

  const handleThemeChange = (e) => {
    dispatch(ToggleTheme(e.target.checked))
  }
  const handleDegreesChange = (e) => {
    dispatch(ToggleDegrees(e.target.checked))
  }


  return (
    <header>
      <Navbar
        bg={themeReducer.theme ? 'light' : 'dark'}
        variant={themeReducer.theme ? 'light' : 'dark'}
        expand='lg'
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              {' '}
              <i className="fas fa-umbrella"></i>
              <span
                style={{
                  marginLeft: '5px',
                  display: 'inline-block',
                  marginTop: '4px',
                }}
              >
                Weather
              </span>
            </Navbar.Brand>
          </Link>
          <Navbar style={{
            marginLeft:'20px'
          }}>
            <Navbar.Brand style={{ fontSize: '12px' }}>
              <span>Light</span>
              <Switch color='default' onChange={handleThemeChange}></Switch>
              <span>Dark</span>
            </Navbar.Brand>
            <Navbar.Brand style={{ fontSize: '12px' }}>
              <span>°C</span>
              <Switch color='default' onChange={handleDegreesChange}></Switch>
              <span>°F</span>
            </Navbar.Brand>
          </Navbar>
          <Nav className='ml-auto'>
            <Link to='/'>
              <Button
                variant='outline-light'
                style={{
                  fontSize: '16px',
                  borderRadius: '100px',
                  border: 'none',
                }}
              >
                <i className='fas fa-home' style={{ color: 'black' }} ></i>
                <i style={{ color: 'black' }}> Home</i>
              </Button>
            </Link>
            <Link to='/favorite'>
              <Button
                variant='outline-light'
                style={{
                  fontSize: '16px',
                  borderRadius: '100px',
                  border: 'none',
                }}
              >
                <i className='fas fa-heart' style={{ color: 'salmon' }}></i>
                <i style={{ color: 'red' }}> Favorite</i>
              </Button>
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default withRouter(Header)
