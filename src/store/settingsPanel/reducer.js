
const INITIAL_STATE = 'SETTING_BASE'

const settingsPanel = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'H1':
      return 'SETTING_H1'
    default:
      return state
  }
}

export default settingsPanel
