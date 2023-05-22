import { program } from 'commander';

import { version } from '../package.json';

program
  .option('-v, --version', 'show the installed version of lancer-cli')
  .option('-i, --init <project name>', 'init your project via this option')
  .option('<project name>', 'test');

program.parse(process.argv);
const options = program.opts();
console.log(options);
if (options.version) {
  console.log(version);
}
if (options.init) {
  console.log(options.init);
}
