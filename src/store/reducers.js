import { combineReducers } from 'redux';
import activeDevice from './device/reducer';
import { baseConfig, h1Config, h2Config, h3Config, h4Config, h5Config, h6Config, paragraphConfig, fontsConfig } from './typeConfig/reducer';
import settingsPanel from './settingsPanel/reducer';

const rootReducer = combineReducers({
   activeDevice,
   baseConfig,
   h1Config,
   h2Config,
   h3Config,
   h4Config,
   h5Config,
   h6Config,
   paragraphConfig,
   settingsPanel,
   fontsConfig
})

export default rootReducer
