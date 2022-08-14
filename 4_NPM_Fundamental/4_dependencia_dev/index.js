const ld = require('lodash');
import chalk from 'chalk';

const a = [1,2,3,4,5]
const b = [1,2,6,7,8]

const diff = ld.difference(a, b)

console.log(chalk.red.bold(diff))