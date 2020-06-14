import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Button, Form} from 'react-bootstrap'
import './userEntry/userEntry.css'
const Nav = ({handleClick, isLoggedIn}) => (
  <div>
    <Navbar bg="transparent">
      <Navbar.Brand id="brand-header" href="#home">
        Changes
      </Navbar.Brand>

      {isLoggedIn ? (
        <div className="ml-auto">
          <Form inline>
            <Button
              color="primary"
              variant="brand-primary-submit-on-navbar"
              onClick={e => handleSubmit(e)}
            >
              New Story
            </Button>
          </Form>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        ''
      )}
    </Navbar>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Nav)

/**
 * PROP TYPES
 */
Nav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
