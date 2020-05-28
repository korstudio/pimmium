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
      calcGrades($('#score-text').value());
    });
  });
})(jQuery);
