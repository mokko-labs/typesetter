
// Initial State of Type Viewer
const typeState = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 1, // em
    lineHeight: 1.375, //em
    fontWeight: 400,
    backgroundColor: '#d9feff',
    color:'#000'
  },
  h1: {
    fontSize:  4.375, // em
    lineHeight: 1.2, //em
    fontWeight: 800
  },
  h2: {
    fontSize:  3.75, // em
    lineHeight: 1.25, //em
    fontWeight: 800
  },
  h3: {
    fontSize:  3.1, // em
    lineHeight: 1.25, //em
    fontWeight: 800
  },
  h4: {
    fontSize:  2.5, // em
    lineHeight: 1.25, //em
    fontWeight: 600
  },
  h5: {
    fontSize:  1.875, // em
    lineHeight: 1.05, //em
    fontWeight: 800
  },
  h6: {
    fontSize:  1.25, // em
    lineHeight: 1.05, //em
    fontWeight: 800
  },
  paragraph: {
    fontSize:  1, // em
    lineHeight: 1.65, //em
    fontWeight: 400
  },
  fonts: {
    fetching: false,
    fetched:false,
    fonts: []
  }
}

export default typeState
