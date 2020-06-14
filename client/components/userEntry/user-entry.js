import UserRegistration from './user-registration'
import UserSignIn from './user-sign-in'
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import allActions from '../../actions/allActions'
import {
  Card,
  Button,
  Col,
  InputGroup,
  Container,
  Row,
  Modal
} from 'react-bootstrap'
import './userEntry.css'

const UserEntry = isReg => {
  const setting = isReg.isReg
  const handleSwitch = doOpposite => {
    setRegistration(!doOpposite)
  }
  const [isRegistration, setRegistration] = useState(setting)

  return (
    <div>
      <Card className="border-t-brand-color mx-auto radiated-card w-100">
        <Card.Body>
          <Container fluid>
            {isRegistration ? <UserRegistration /> : <UserSignIn />}
            <Row className="pt-4">
              <Col lg={12}>
                <div className="or-div">
                  <span>Or</span>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={12}>
                <Col lg={12}>
                  <Button
                    block="true"
                    className="py-3"
                    variant="outline-dark w-100"
                    onClick={e => handleSwitch(isRegistration)}
                  >
                    {isRegistration ? 'Sign In' : 'Register'}
                  </Button>
                </Col>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserEntry
