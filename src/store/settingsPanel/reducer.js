
const INITIAL_STATE = {
  type: 'BASE',
}

export const settingsPanel = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return Object.assign({}, state, {type: action.payload})
    default:
      return state
  }
}

export default settingsPanel
