import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../../actions/allActions'
import {Button, Modal, Row, Col} from 'react-bootstrap'
import styles from './homePage.module.css'
import Image from '../../../images/splashImage.svg'
import UserEntry from '../../userEntry/user-entry'

const HomePage = () => {
  const isLoggedin = useSelector(state => state.user.id)

  // Modal Settings
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = reg => {
    setShow(true)
    setIsNewReg(reg !== 'login')
  }

  const [isNewReg, setIsNewReg] = useState(false)

  let history = useHistory()
  const ctaHandler = e => {
    if (isLoggedin) {
      history.push('/newChange')
    } else {
      history.push('/signIn')
    }
  }
  const feed = [
    {
      id: 1,
      author: 'Andrew Paulino',
      title: 'First',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor auctor lacus at semper. Fusce dictum quam ante, at tempor augue tincidunt vitae...'
    },
    {
      id: 2,
      author: 'Alex Javier',
      title: 'Second',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor auctor lacus at semper. Fusce dictum quam ante, at tempor augue tincidunt vitae. Aenea...'
    }
  ]

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <UserEntry isReg={isNewReg} />
      </Modal>

      <div className={styles.Container}>
        <div className={styles.Banner}>
          <div>
            <h1 className={styles.BannerHeading}>Changes</h1>
          </div>
          <div className={styles.BannerLinks}>
            <a onClick={e => handleShow('login')}>Login</a>
            {' / '}
            <a onClick={e => handleShow('register')}>Register</a>
          </div>
        </div>
        <div className={styles.CTAContainer}>
          <div>
            <h2 className={styles.CTAHeader}>Silence is not the answer</h2>
            <p className={styles.CTAText}>
              Let's give the voice back to the people,lets give a platform for
              <br /> the disenfranchised, post your story, make a{' '}
              <span className={styles.changeWord}>Change</span>
            </p>
            {isLoggedin ? (
              <Button
                className={styles.CTAButton}
                onClick={e => handleRedirect('newChange')}
              >
                Post Your Story
              </Button>
            ) : (
              <Button
                className={styles.CTAButton}
                onClick={e => handleShow('register')}
              >
                Post Your Story
              </Button>
            )}
          </div>
          <div className={styles.CTAImage}>
            <img className={styles.Image} src={Image} />
          </div>
        </div>
      </div>
      <div className={styles.SplashFeedContainer}>
        <Row noGutters={true}>
          <Col lg={12}>
            <h2 className={styles.SplashFeedHeader}>Top Changes</h2>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col lg={12}>
            {' '}
            <div className={styles.SplashFeed}>
              {feed.map(story => {
                return (
                  // MAKE SMALLER
                  <div className={styles.SplashStory} key={story.id}>
                    <div className={styles.Stripe} />
                    <div className={styles.SplashContent}>
                      <h3>{story.title}</h3>
                      <p>
                        {story.body}{' '}
                        <a className={styles.changeLink} href="/linkToArticle">
                          Read More
                        </a>
                      </p>

                      <p className={styles.Author}>
                        Written By,{' '}
                        <span className={styles.bold}>{story.author}</span>{' '}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomePage
