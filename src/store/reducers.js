import { combineReducers } from 'redux'
import activeDevice from './device/reducer'
import settingsPanel from './settingsPanel/reducer'

const rootReducer = combineReducers({
   activeDevice,
   settingsPanel
})

export default rootReducer
