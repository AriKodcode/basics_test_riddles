import input from 'analiza-sync';

export default function ask_riddle(riddleObj) {
  console.log(riddleObj['name']);
  console.log(riddleObj['taskDescription']);
  let flag = true;

  if ('choices' in riddleObj) {
    while (flag) {
      console.log('choices', riddleObj['choices']);
      let answer = Number(input('Enter your answer. '));
      answer -= 1;
      answer = String(answer);
      if (answer === riddleObj.correctAnswer) {
        console.log('Correct answer: ');
        flag = false;
      } else {
        console.log('Error. please try again');
      }
    }
  } else {
    while (flag) {
      let answer = input('Enter your answer. ');
      if (answer === riddleObj.correctAnswer) {
        console.log('Correct answer: ');
        flag = false;
      } else {
        console.log('Error. please try again');
      }
    }
  }
}
