import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import appJs from "./AppJs/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = ({ showLog }) => {
  const input = parseInput();
  console.log("aaaaaaa : ", input, showLog);

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  appJs(input);
};

export default run;