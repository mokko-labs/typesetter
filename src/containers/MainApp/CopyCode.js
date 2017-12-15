
const CopyCode = (base, h1, h2, h3, h4, h5, h6, paragraph) => {
  var h1Font = h1.fontFamily ? h1.fontFamily : base.fontFamily;
  var h1Color = h1.color ? h1.color : base.color;
  var h2Font = h2.fontFamily ? h1.fontFamily : base.fontFamily;
  var h2Color = h2.color ? h1.color : base.color;
  var h3Font = h3.fontFamily ? h1.fontFamily : base.fontFamily;
  var h3Color = h3.color ? h1.color : base.color;
  var h4Font = h4.fontFamily ? h1.fontFamily : base.fontFamily;
  var h4Color = h4.color ? h1.color : base.color;
  var h5Font = h5.fontFamily ? h1.fontFamily : base.fontFamily;
  var h5Color = h5.color ? h1.color : base.color;
  var h6Font = h6.fontFamily ? h1.fontFamily : base.fontFamily;
  var h6Color = h6.color ? h1.color : base.color;
  var pFont = paragraph.fontFamily ? paragraph.fontFamily : base.fontFamily;
  var pColor = paragraph.color ? paragraph.color : base.color;
  var multiline = `
  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

  body {
    font-family: `+base.fontFamily+`;
    font-size: `+base.fontSize+`;
    font-weight: 400;
    background-color: `+base.backgroundColor+`;
    color: `+base.color+`;
  }
  h1 {
    font-family: `+h1Font+`;
    font-size: `+h1.fontSize+`;
    font-weight: `+h1.fontWeight+`;
    color: `+h1Color+`;
  }
  h2 {
    font-family: `+h2Font+`;
    font-size: `+h2.fontSize+`;
    font-weight: `+h2.fontWeight+`;
    color: `+h2Color+`;
  }
  h3 {
    font-family: `+h3Font+`;
    font-size: `+h3.fontSize+`;
    font-weight: `+h3.fontWeight+`;
    color: `+h3Color+`;
  }
  h4 {
    font-family: `+h4Font+`;
    font-size: `+h4.fontSize+`;
    font-weight: `+h4.fontWeight+`;
    color: `+h4Color+`;
  }
  h5 {
    font-family: `+h5Font+`;
    font-size: `+h5.fontSize+`;
    font-weight: `+h5.fontWeight+`;
    color: `+h5Color+`;
  }
  h6 {
    font-family: `+h6Font+`;
    font-size: `+h6.fontSize+`;
    font-weight: `+h6.fontWeight+`;
    color: `+h6Color+`;
  }
  p {
    font-family: `+pFont+`;
    font-size: `+paragraph.fontSize+`;
    font-weight: `+paragraph.fontWeight+`;
    color: `+pColor+`;
  }
  `
  return multiline;
}

export default CopyCode
