import now from 'date-now';
export default function riddleTime(askRiddleFunc) {
  const start = now();
  askRiddleFunc();
  const end = Date.now();
  const sum_time = Math.floor((end - start) / 1000);
  return sum_time;
}
