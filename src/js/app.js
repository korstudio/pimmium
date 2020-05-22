// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.

import dots from './modules/dots';
import boardGame from './modules/board-game';

(($) => {
  // When DOM is ready
  $(() => {
    dots();
  });

  $(() => {
    boardGame();
  });
  
  // if ($('#main-board')) {
  //   BoardGame();
  // }
})(jQuery);
