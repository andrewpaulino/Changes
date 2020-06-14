import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Button, Col, InputGroup, Container, Row} from 'react-bootstrap'
import './userEntry.css'

const UserRegistration = () => {
  const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [userName, setUserName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()
    setUserName(firstName + lastName)
    dispatch(
      allActions.userActions.signUpauth(
        firstName,
        lastName,
        userName,
        email,
        password,
        'signUp'
      )
    )
  }

  return (
    <div className="signup_page">
      <Container fluid>
        <Row className="mt-3">
          <Col lg={12}>
            <Col lg={12}>
              <h3 className="form_header">
                Register for
                <span id="change_label"> Change </span>
              </h3>
            </Col>
          </Col>
        </Row>

        <Row noGutters={true} className="py-2">
          <Col lg={6}>
            <Col lg={12}>
              <span className="label-user-entry-registration">First Name</span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Jane"
                  aria-describedby="inputGroupPrepend"
                  name="first_name"
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                />
              </InputGroup>
            </Col>
          </Col>
          <Col lg={6}>
            <Col lg={12}>
              <span className="label-user-entry-registration">Last Name</span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Doe"
                  aria-describedby="inputGroupPrepend"
                  name="last_name"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                />
              </InputGroup>
            </Col>
          </Col>
        </Row>

        <Row className="py-2">
          <Col lg={12}>
            <Col lg={12}>
              <span className="label-user-entry-registration">
                Email Address
              </span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="janedoe@email.com"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </InputGroup>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr />
          </Col>
        </Row>

        <Row className="py-2">
          <Col lg={12}>
            <Col lg={12}>
              <span className="label-user-entry-registration">Password</span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="password"
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </InputGroup>
            </Col>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={12}>
            <Button
              block={true}
              color="primary"
              variant="brand-primary-submit"
              onClick={e => handleSubmit(e)}
            >
              Join Changes
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserRegistration
