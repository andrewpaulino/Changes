import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions/allActions'
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
        <Row>
          <Col lg={6}>
            <Col lg={12}>
              <span className="label-user-entry">Email Address</span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="lukeskywalker@email.com"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </InputGroup>
            </Col>
          </Col>
        </Row>
      </Container>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationFormikFirstName">
          <Form.Label>First Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="First Name"
              aria-describedby="inputGroupPrepend"
              name="firstName"
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikLastName">
          <Form.Label>Last Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Last Name"
              aria-describedby="inputGroupPrepend"
              name="lastName"
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikUserName">
          <Form.Label> Username</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="userName"
              onChange={e => setUserName(e.target.value)}
              value={userName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikEmail">
          <Form.Label> Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="firstName"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button color="primary" onClick={e => handleSubmit(e)}>
          Start making changes
        </Button>
      </Form.Row>
    </div>
  )
}

export default UserRegistration
