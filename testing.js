import input from 'analiza-sync';
import now from 'date-now';

const start = now();
let name = input();
const end = Date.now();
console.log(name, (end - start) / 1000);
