import *  as core from '@actions/core';
import *  as core from '@actions/github';

const name = core.getInput('name');
  const outPutValue = `Hello ${nameToGreet} from Mars!`;
  core.setOutput('greeting', outPutValue);