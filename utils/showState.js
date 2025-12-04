export default function show_state(player) {
  let sum_time = 0;
  for (let i = 0; i < player['times'].length; i++) {
    sum_time += player['times'][i];
  }
  const avg = sum_time / player['times'].length;
  return `Dreat job ${player['name']}!
  Total time: ${sum_time} second
    Average per riddle: ${avg} second`;
}
