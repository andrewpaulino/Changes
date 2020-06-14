import UserRegistration from './user-registration'
import UserSignIn from './user-sign-in'
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import allActions from '../../actions/allActions'
import {Card, Button, Col, InputGroup, Container, Row} from 'react-bootstrap'
import './userEntry.css'

const UserEntry = () => {
  //   const {thisConfiguration} = props

  const [isRegistration, setRegistration] = useState(true)

  return (
    <div>
      <Card className="border-t-brand-color radiated-card ">
        <Card.Body>
          <Container>
            {isRegistration ? <UserRegistration /> : <UserSignIn />}
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserEntry
