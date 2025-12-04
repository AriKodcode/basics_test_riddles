import createPlayer from './utils/player.js';
import add_solve_time from './utils/addSovleTime.js';
import ask_riddle from './utils/askRiddle.js';
import riddleTime from './utils/measureSolveTime.js';
import show_state from './utils/showState.js';
import all_riddles from './riddles/alriddles.js';
import input from 'analiza-sync';
import { log } from 'console';

let ridders = all_riddles();
log('Wellcom to RIDDLE GAME:');
const userName = input('Enter yuor name: ');
let player = createPlayer(userName);
for (let i = 0; i < all_riddles().length; i++) {
  log(`\nQuestion number ${i + 1}\n`);
  let time_second = riddleTime(() => ask_riddle(ridders[i]));
  add_solve_time(player, time_second);
}
log('\nsummery', show_state(player));
