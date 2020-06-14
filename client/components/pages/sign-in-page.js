import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Button, Col, InputGroup, Row, Container} from 'react-bootstrap'

const SignInPage = () => {
  // TODO: Simple two fields (email and password)
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()

    dispatch(allActions.userActions.auth(email, password, 'login'))
  }

  // TODO: Able to dispatch an action to hit our API and find our user and return some sort of session object
  // TODO: Redirect to post a new story or feed

  // Redirects:
  // CTA: [Sign In Button] = /newChange {Authenticated} or /changes {Authenticated} depending on if user redirect
  // Authentication: if (!unauthenticated) => {Do Nothing}

  return (
    <div className="signin_page">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <span className="label">Email Address</span>
          </Col>
          <Col lg={12}>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="py-3">
          <Col lg={12}>
            <span className="label">Password</span>
          </Col>
          <Col lg={12}>
            <InputGroup>
              <Form.Control
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block={true} color="primary" onClick={e => handleSubmit(e)}>
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignInPage
