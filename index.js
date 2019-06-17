'use strict';


// 1984 palette

const ligthColors = {
    green: '#C1F076',
    light_blue: '#97BBF3',
    blue: '#67BCF9',
    pink: '#D288F5',
    red: '#EA3DAC',
    violet: '#E33DF2',
};

const darkColors = {
    pink: '#775ABB',
    violet: '#574EB7',
    darkViolet: '#350E72',
    blue: '#050653',
    darkBlue: '#0C0D54',
    black: '#070A2E',
};

const black = '#212836';
const white = '#a8b5d1';
const red = '#ff5874';
const green = '#6af699';
const yellow = '#fffa9e';
const blue = '#82aaff';
const magenta = '#c792ea';
const cyan = '#4ff2f8';
const lightBlack = '#7992b4';
const borderColor = '#141820';
const tabText = '#7e8698';
const tabNavBg = '#FF0000';
const tabTextActive = '#d5d9e2';
const selectionColor = 'rgba(130, 170, 255, 0.3)';
const dividerBg = 'rgba(64,74,89,.4)';
const alternativeCursorColor = '#528bff';

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
    `
    })
};
