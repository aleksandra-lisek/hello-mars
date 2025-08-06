import *  as core from '@actions/core';
import *  as core from '@actions/github';

try {
  const name = core.getInput('name');
  const outPutValue = `Hello ${nameToGreet} from Mars!`;
  core.setOutput('greeting', outPutValue);
} catch (error) {
  core.setFailed(error.message);
}
