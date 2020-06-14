import user from './userReducer'
import postChangePageActions from './postChangePageReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  user,
  postChangePageActions
})

export default rootReducer
