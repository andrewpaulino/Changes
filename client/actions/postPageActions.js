const POST_CHANGE_TO_DB = 'POST_CHANGE_TO_DB'

const postChangeToDb = user => ({type: POST_CHANGE_TO_DB, user})
const removeUser = () => ({type: REMOVE_USER})

//Thunk Middleware
const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
