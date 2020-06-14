import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../../actions/allActions'
import {
  Form,
  Col,
  Row,
  Button,
  Container,
  Card,
  InputGroup
} from 'react-bootstrap'

const PostChangePage = () => {
  const [storyBody, setStoryBody] = useState('')
  const [storyTitle, setStoryTitle] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [allowComments, setAllowComments] = useState(false)
  const [groupSelection, setGroupSelection] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(
      storyBody,
      storyTitle,
      isAnonymous,
      allowComments,
      groupSelection
    )
  }
  return (
    <div className="post_change_page">
      <Container>
        <Card className="border-t-brand-color mx-auto radiated-card w-100">
          <Card.Body>
            <Container>
              <Row noGutters={true} className="mt-3">
                <Col lg={12}>
                  <h3 className="form_header">
                    Your way to express yourself, no
                    <span id="change_label"> restrictions. </span>
                  </h3>
                </Col>
              </Row>
              <Row>
                <Row className="py-4">
                  <Col lg={12}>
                    <Col lg={12}>
                      <span className="label-user-entry-registration mb-1">
                        Title of your experience, injustice, story, you wish to
                        share.
                      </span>
                    </Col>
                    <Col lg={12}>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          value={storyTitle}
                          aria-describedby="inputGroupPrepend"
                          name="story_title"
                          onChange={e => setStoryTitle(e.target.value)}
                        />
                      </InputGroup>
                    </Col>
                  </Col>
                </Row>
                <Row className="py-4 w-100">
                  <Col lg={12}>
                    <Col lg={12}>
                      <span className="label-user-entry-registration mb-1">
                        Your story
                      </span>
                    </Col>
                    <Col lg={12}>
                      <InputGroup>
                        <Form.Control
                          as="textarea"
                          rows="10"
                          value={storyBody}
                          onChange={e => setStoryBody(e.target.value)}
                        />
                      </InputGroup>
                    </Col>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Col lg={12}>
                  <fieldset className="my-fieldset">
                    <legend className="login-legend">Your Decisions </legend>
                    <Container className="text-center py-3">
                      {' '}
                      <Row>
                        <Col lg={4}>
                          <Row>
                            <Col lg={12}>
                              <span className="label-user-entry-registration mb-1">
                                Allow Comments?
                              </span>
                            </Col>
                            <Col lg={12}>
                              {/* <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="switch_label"
                                label="No Comments Allowed"
                              /> */}
                              <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                  type="checkbox"
                                  className="label_check"
                                  label="Yes, allow comments!"
                                  onChange={e =>
                                    setAllowComments(e.target.checked)
                                  }
                                  value={allowComments}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4}>
                          <Row>
                            <Col lg={12}>
                              <span className="label-user-entry-registration mb-1">
                                Post Anonymously?
                              </span>
                            </Col>
                            <Col lg={12}>
                              {/* <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="switch_label"
                                label="No Comments Allowed"
                              /> */}
                              <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                  type="checkbox"
                                  className="label_check"
                                  label="Yes, please hide my identity"
                                  onChange={e =>
                                    setIsAnonymous(e.target.checked)
                                  }
                                  value={isAnonymous}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4}>
                          <Row>
                            <Col lg={12}>
                              <span className="label-user-entry-registration mb-1">
                                Groups and Communities
                              </span>
                            </Col>
                            <Col lg={12}>
                              {/* <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="switch_label"
                                label="No Comments Allowed"
                              /> */}
                              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                <Form.Control
                                  as="select"
                                  size="sm"
                                  custom
                                  onChange={e =>
                                    setGroupSelection(e.target.value)
                                  }
                                  value={groupSelection}
                                >
                                  <option value="blm">
                                    Black lives Matter
                                  </option>
                                  <option value="sj">Social Injustice</option>
                                  <option />
                                  <option>4</option>
                                  <option>5</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </fieldset>
                </Col>
              </Row>
              <Row className="py-4">
                <Col lg={12}>
                  <Button
                    block={true}
                    color="primary"
                    variant="brand-primary-submit"
                    onClick={e => handleSubmit(e)}
                  >
                    Submit my story
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default PostChangePage
