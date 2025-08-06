/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require('@actions/core');

try {
  const name = core.getInput('name');
  const outPutValue = `Hello ${nameToGreet} from Mars!`;
  core.setOutput('greeting', outPutValue);
} catch (error) {
  core.setFailed(error.message);
}

