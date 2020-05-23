const boardGame = (paper) => {
  paper.setup($('#main-board canvas'));
  // console.log('board', paper)
  const boardImage = new paper.Raster($('#bg-board'));
  // console.log('board game init');
  boardImage.onLoad = () => {
    console.log(boardImage.bounds);
  }

  paper.view.draw();
};

export default boardGame;
