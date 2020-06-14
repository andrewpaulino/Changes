import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Button, Col, InputGroup, Row, Container} from 'react-bootstrap'
import './userEntry.css'

const UserSignIn = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()

    dispatch(allActions.userActions.auth(email, password, 'login'))
  }

  return (
    <div className="signin_page">
      <Container fluid>
        <Row className="mt-3">
          <Col lg={12}>
            <Col lg={12}>
              <h3 className="form_header">
                Sign In for
                <span id="change_label"> Change </span>
              </h3>
            </Col>
          </Col>
        </Row>
        <Row className="py-3">
          <Col lg={12}>
            <Col lg={12}>
              <span className="label-user-entry">Email Address</span>
            </Col>
            <Col lg={12}>
              <InputGroup>
                <Form.Control
                  type="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </InputGroup>
            </Col>
          </Col>
        </Row>

        <Row className="pt-1 pb-3">
          <Col lg={12}>
            <Col lg={12}>
              <span className="label-user-entry">Password</span>
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
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Col lg={12}>
              <Button
                block={true}
                color="primary"
                variant="brand-primary-submit"
                onClick={e => handleSubmit(e)}
              >
                Sign In
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserSignIn
