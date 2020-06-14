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

const UserEntry = () => {
  //   const {thisConfiguration} = props

  const [isRegistration, setRegistration] = useState(true)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
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
                      >
                        {isRegistration ? 'Sign In' : 'Register'}
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Modal>

        <Card
          className={`border-t-brand-color mx-auto radiated-card w-${
            isRegistration ? 75 : 50
          }`}
        >
          <Card.Body>
            <Container>
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
                    >
                      {isRegistration ? 'Sign In' : 'Register'}
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default UserEntry
