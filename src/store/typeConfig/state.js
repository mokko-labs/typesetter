
// Initial State of Type Viewer
const typeState = {
  base: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16, // px
    fontWeight: 400,
    backgroundColor: '#fff',
    color:'#000'
  },
  h1: {
    fontSize:  90, // px
    lineHeight: 100, // px
    fontWeight: 800
  },
  h2: {
    fontSize:  70, // px
    lineHeight: 80, // px
    fontWeight: 800
  },
  h3: {
    fontSize:  50, // px
    lineHeight: 60, // px
    fontWeight: 800
  },
  h4: {
    fontSize:  40, // px
    lineHeight: 50, // px
    fontWeight: 600
  },
  h5: {
    fontSize:  30, // px
    lineHeight: 40, // px
    fontWeight: 800
  },
  h6: {
    fontSize:  20, // px
    lineHeight: 30, // px
    fontWeight: 800
  },
  paragraph: {
    fontSize:  18, // px
    lineHeight: 28, // px
    fontWeight: 300,
    color: '#5a5d60'
  },
  fonts: {
    fetching: false,
    fetched:false,
    fonts: []
  }
}

export default typeState
