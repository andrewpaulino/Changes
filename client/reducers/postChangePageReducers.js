import {POST_CHANGE_TO_DB} from '../actions/postChangePageActions'

const postChangePageActions = (state = {}, action) => {
  switch (action.type) {
    case 'POST_CHANGE_TO_DB':
      return state
    default:
      return state
  }
}

export default postChangePageActions
