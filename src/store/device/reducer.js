const activeDevice = (state = 'DESKTOP', action) => {
  switch (action.type) {
    case 'CHANGE_DEVICE':
      return action.payload
    default:
      return state
  }
}

export default activeDevice
