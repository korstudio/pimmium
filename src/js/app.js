// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.

import dots from './modules/dots';
// import boardGame from './modules/board-game';
// import course from './modules/course-01';
import calcGrades from './modules/course-02';

(($) => {
  // When DOM is ready
  $(() => {
    dots();
  });

  // $(() => {
  //   console.log(p);
  //   if ($('#main-board')[0]) {
  //     boardGame(p);
  //   }
  // });
  //
  // $(() => {
  //   course();
  // });

  $(() => {
    $('#score-button').click(() => {

      // const x = 2;
      // const y = 3;
      //
      // const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,100,50,70,88]; // 1D
      // // locker | 1 | 2 | 3 | 4 | 5 |
      //
      // const array2 = [
      //   [1,2,3],
      //   [4,5,6]
      // ];
      // locker
      // | 1 | 2 | / | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | / | x | / | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | / | ? | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
      // | 1 | 2 | 3 | 4 | 5 | 6 | x | 8 | 9 |
      // const currentRow = 1; const currentCol = 2;
      // array2[1][2] /// array2[currentRow-1][currentCol], array2[1][1], ...

      // console.log(`array length = ${array.length}`);

      // const str = ['a', 'b', 'c', 'd', 'e'];
      // const a = str[0];
      // const e = str[4]; // e

      // let sum = 0;
      // for(let i = 0; i < array.length; i++) {
      //   sum = sum + array[i];
      // } // 0 -> 23 = 24 step

      // for(let row = 0; row < array2.length; row++) {
      //   for(let col = 0; col < array2[row].length; col++) {
      //     console.log(`current row = ${row}, column ${col}`);
      //   }
      // }

      // sum = sum + array[0] = 0 + 1 = 1
      // sum = sum + array[1] = 1 + 2 = 3
      // sum = sum + array[2] = 3 + 3 = 6
      // sum = sum + array[3] = 6 + 4 = 10
      // sum = sum + array[4] = 10 + 5 = 15
      // sum = sum + array[5] = 15 + 6 = 21
      // ...
      // sum = sum + array[23] = ....

      // console.log(sum); // 518

      // const score = $('#score-text')[0].value;
      // const result = calcGrades(score);
      // $('#grade-result').html(result);

      const inputBoxes = $('.score-input-box');
      const numberOfBoxes = inputBoxes.length;
      let totalScore = 0;

      $('.score-input-box').each((index, element) => {
        const num = Number(element.value);
        totalScore = totalScore + num;
      });

      const average = totalScore / numberOfBoxes;
      const result = calcGrades(average);
      $('#grade-result').html(result);
    });
  });
})(jQuery);
