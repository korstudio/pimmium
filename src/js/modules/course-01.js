const course = () => {
  console.log('course is ready!');
  console.log('PIMMIUM');

  let x = 3; // ให้ x มีค่าเป็น 3
  const y = 4; // const คือ constant

  x = 5;
  // y = 6;

  x = 10;

  x = 2 + 3;

  // x, y // ตัวแปร variable
  const g = 9.8; // g
  const doublePi = Math.PI * 2; // pi * 2
  const x2 = g * doublePi; // 9.8 * pi * 2
  let x3 = doublePi + x2; // x1+x2

  console.log(x2);

  console.log(`x = ${x}`);
  console.log(`y = ${y}`);

  const text = 'this is a text'; // ' single-quote or " double-quote
  const valueOfX3 = `value of x3 is ${x3}`;
  console.log(text);
  console.log(valueOfX3);

  x3 = 0;

  if (x3 > 60) {
    console.log('x3 is larger than 60');
  } else {
    console.log('x3 is less than 60');
  }

  // 30 < N < 100
  let N = 29;
  // if (N < 30) {
  //   console.log('error: N is less than 30');
  // } else if (N > 100) {
  //   console.log('error: N is larger than 100');
  // } else {
  //   console.log(`N is ${N}`);
  // }

  // if a and b then ...
  // AND && => T AND T = T / else F
  // OR || => F OR F = F / else T
  // T || F = T
  // ! (NOT)

  // = assign
  // == equal => value L = R
  // === strictly equal => value L = R, type L = R

  // type
  const A = 20; // type of A = Number
  const B = '20'; // type of B = string

  if (A === B) {
    console.log('A === B');
  }

  N = '20';
  if (N === '20') {
    console.log('N is equal to 20');
  }
  if (N >= 30 && N <= 100) {
    console.log(`N is ${N}`);
  }
  // if (!(N < 30 || N > 100)) {
  //   console.log(`N is ${N}`);
  //   // console.log('error: N is not between 30 and 100');
  // }

  // operand
  // = > < >= <= == === && || !

  // a = [1,2,3,4]
  // loop, function
};

export default course;
