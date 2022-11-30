#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

let sides = 0; 
if (args.sides) {
    sides = args.sides; 
} else {
    sides = 6;
}

let dice = 0; 
if (args.dice) {
    dice = args.dice; 
} else {
    dice = 2; 
}

let rolls = 0; 
if (args.rolls) {
    rolls = args.rolls; 
} else {
    rolls = 1; 
}

console.log(JSON.stringify(roll(sides, dice, rolls)));