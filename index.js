'use strict';


// 1984 palette
const lightColors = {
    green: '#C1F076',
    light_blue: '#97BBF3',
    blue: '#67BCF9',
    light_pink: '#D288F5',
    red: '#EA3DAC',
    pink: '#FF16B0',
    violet: '#E33DF2',
    yellow: '#FFEA16'
};

const darkColors = {
    pink: '#775ABB',
    violet: '#574EB7',
    darkViolet: '#350E72',
    blue: '#0C0D54',
    darkBlue: '#050653',
    black: '#070A2E',
    gray: '#242533'
};

const yellow = lightColors.yellow;
const tabNavBg =   darkColors.darkViolet;
const selectionColor = darkColors.gray;

const borderColor = darkColors.darkBlue;
const black = darkColors.black;
const dividerBg = darkColors.blue;
const lightBlack = darkColors.violet;

const green = lightColors.green;
const blue = lightColors.blue;
const magenta = lightColors.light_pink;

const cyan = lightColors.light_blue;
const red = lightColors.red;
const alternativeCursorColor = lightColors.violet;

const tabTextActive = lightColors.light_pink;
const white = lightColors.violet;
const tabText = darkColors.pink;


const colors = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: white
};

module.exports.decorateConfig = config => {
    const backgroundColor = black;
    const foregroundColor = white;
    const cursorColor = config.cursorColor || alternativeCursorColor;

    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        cursorColor,
        selectionColor,
        colors,
        termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
        css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
      .tab_tab .tab_active {
        color: #FFF6B0;
        text-shadow: 2px 2px 10px #FF16B0;
      }
      .terms_terms {
        text-shadow: 2px 2px 10px #FF16B0;
      }
    `
    })
};
