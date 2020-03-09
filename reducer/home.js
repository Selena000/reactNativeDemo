const initalState = {
  list: [],
  isLoading: true
}

export default function homeReducer(state = initalState, action) {
  switch(action.type) {
    case 'INIT_HOME_LIST': {
      return action.data
    }
    default:
      return state
  }
}