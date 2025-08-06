const core = require('@actions/core');

try {
  const name = core.getInput('name');
  const outPutValue = `Hello ${nameToGreet} from Mars!`;
  core.setOutput('greeting', outPutValue);
} catch (error) {
  core.setFailed(error.message);
}
