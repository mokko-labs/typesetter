import model from './state.js'

export const baseConfig = (state = model.base, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_BASE':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_COLOR_BASE_BACKGROUND':
      return Object.assign({}, state, {backgroundColor: action.payload})
      break;
    case 'UPDATE_FONT_BASE':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_BASE':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.base.fontSize})
        break;
    default:
      return state
  }
}

export const h1Config = (state = model.h1, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H1':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H1':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H1':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h1.fontSize})
        break;
    default:
      return state
  }
}

export const h2Config = (state = model.h2, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H2':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H2':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H2':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h2.fontSize})
        break;
    default:
      return state
  }
}

export const h3Config = (state = model.h3, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H3':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H3':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H3':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h3.fontSize})
        break;
    default:
      return state
  }
}

export const h4Config = (state = model.h4, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H4':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H4':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H4':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h4.fontSize})
        break;
    default:
      return state
  }
}

export const h5Config = (state = model.h5, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H5':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H5':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H5':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h5.fontSize})
        break;
    default:
      return state
  }
}

export const h6Config = (state = model.h6, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_H6':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_H6':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_H6':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.h6.fontSize})
        break;
    default:
      return state
  }
}

export const paragraphConfig = (state = model.paragraph, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_PARAGRAPH':
      return Object.assign({}, state, {color: action.payload})
      break;
    case 'UPDATE_FONT_PARAGRAPH':
        return Object.assign({}, state, {fontFamily: (action.payload && action.payload.label) ? action.payload.label : model.base.fontFamily})
        break;
    case 'UPDATE_FONT_SIZE_PARAGRAPH':
        return Object.assign({}, state, {fontSize: (action.payload && action.payload) ? action.payload : model.paragraph.fontSize})
        break;
    default:
      return state
  }
}

export const fontsConfig = (state = model.fonts, action) => {
  switch (action.type) {
    case 'LOAD_FONTS_PENDING':
      return Object.assign({}, state, {fetching: true})
      break;
    case 'LOAD_FONTS_FULFILLED':
      return Object.assign({}, state, {fetching: false, fetched: true, fonts: action.payload.data.items })
      break;

    default:
      return state
  }
}
