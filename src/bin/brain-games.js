#!/usr/bin/env node

import getUserName from './../';
console.log('Welcome to the Brain Games!');

const name = getUserName()

console.log('Hello, ' + name + "!")
