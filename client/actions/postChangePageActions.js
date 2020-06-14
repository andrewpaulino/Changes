import axios from 'axios'
import history from '../history'
const POST_CHANGE_TO_DB = 'POST_CHANGE_TO_DB'

const postChangeToDb = user => ({type: POST_CHANGE_TO_DB, user})
//Thunk Middleware
const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

const postNewChangeToDatabase = (
  storyBody,
  storyTitle,
  isAnonymous,
  allowComments,
  groupSelection,
  userId
) => async dispatch => {
  console.log('Here')
  let res
  try {
    res = await axios.post(`http://localhost:8080/api/changes/add/${userId}`, {
      storyBody,
      storyTitle,
      isAnonymous,
      allowComments,
      groupSelection
    })
    if (res.status === 200) {
      history.push('/home')
    }
  } catch (authError) {
    console.log(authError)
    // return dispatch(getUser({error: authError}))
  }

  try {
    history.push('/ChangeFeed')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export default {
  postNewChangeToDatabase,
  postChangeToDb
}
