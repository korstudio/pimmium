const calcGrades = (score) => {
  console.log(`input score = ${score}`);

  const scoreNumber = Number(score);
  let grade = '';

  // > 100 = error
  // 100 max score
  // 80 - 100 = A
  // 70 - 79 = B
  // 60 - 69 = C
  // 50 - 59 = D
  // < 50 = F

  // conditions here
  // if (scoreNumber > 100) {
  //   grade = 'error';
  // } else if (scoreNumber >= 80 && scoreNumber <= 100) {
  //   grade = 'A';
  // } else if (scoreNumber >= 70 && scoreNumber < 80) {
  //   grade = 'B';
  // } else if (scoreNumber >= 60 && scoreNumber < 70) {
  //   grade = 'C';
  // } else if (scoreNumber >= 50 && scoreNumber < 60) {
  //   grade = 'D';
  // } else if (scoreNumber >= 0 && scoreNumber < 50) {
  //   grade = 'F';
  // } else {
  //   // score < 0
  //   grade = 'error';
  // }

  if (scoreNumber > 100 || scoreNumber < 0) {
    grade = 'error';
  } else if (scoreNumber < 50) {
    grade = 'F';
  } else if (scoreNumber < 60) {
    grade = 'D';
  } else if (scoreNumber < 70) {
    grade = 'C';
  } else if (scoreNumber < 80) {
    grade = 'B';
  } else if (scoreNumber <= 100) {
    grade = 'A';
  } else {
    grade = 'error';
  }

  console.log(`grade = ${grade}`);

  return grade;
};

export default calcGrades;
