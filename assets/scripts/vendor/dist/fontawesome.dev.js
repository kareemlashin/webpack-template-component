"use strict";

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

/**
 * @fileoverview Font Awesome 5
 * @link https://fontawesome.com/how-to-use/with-the-api/
 */
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeRegularSvgIcons.far, _freeBrandsSvgIcons.fab); // or
// to subset a large number of icons into only the icons that you are using
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// library.add(faPhone, faEnvelope, faPaperPlane)
// automatically find any <i> tags in the page and replace those with <svg> elements
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-i2svg


_fontawesomeSvgCore.dom.i2svg(); // or
// if content is dynamic
// watch the DOM automatic for any additional icons being added or modified
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-watch
// dom.watch()
//# sourceMappingURL=fontawesome.dev.js.map
