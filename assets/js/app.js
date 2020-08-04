(function () {
  'use strict';

  // This is an examples of simple export.
  //
  // You can remove or add your own function in this file.
  var _createCells = function _createCells() {
    var width = 10;
    var height = 10;
    var size = width * height;
    var html = '<div class="entry-cells">';

    for (var i = 0; i < size; i += 1) {
      html += "<div class=\"cell cell-".concat(i, "\"></div>");
    }

    html += '</div>';
    return html;
  };

  var dots = function dots() {
    var $cnt = $('.entry-section');

    var cells = _createCells();

    $cnt.html(cells);
  };

  var calcGrades = function calcGrades(score) {
    console.log("input score = ".concat(score));
    var scoreNumber = Number(score);
    var grade = ''; // > 100 = error
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

    console.log("grade = ".concat(grade));
    return grade;
  };

  // You can write a call and import your functions in this file.

  (function ($) {
    // When DOM is ready
    $(function () {
      dots();
    }); // $(() => {
    //   console.log(p);
    //   if ($('#main-board')[0]) {
    //     boardGame(p);
    //   }
    // });
    //
    // $(() => {
    //   course();
    // });

    $(function () {
      $('#score-button').click(function () {
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
        var inputBoxes = $('.score-input-box');
        var numberOfBoxes = inputBoxes.length;
        var totalScore = 0;
        $('.score-input-box').each(function (index, element) {
          var num = Number(element.value);
          totalScore = totalScore + num;
        });
        var average = totalScore / numberOfBoxes;
        var result = calcGrades(average);
        $('#grade-result').html(result);
      });
    });
  })(jQuery);

}());
