const boardGame = (paper) => {
  paper.setup($('#main-board canvas')[0]);
  // console.log('board', paper)
  const boardImage = new paper.Raster($('#bg-board')[0]);
  // console.log('board game init');
  boardImage.onLoad = () => {
    console.log(boardImage.bounds);
  };

  paper.view.draw();
};

export default boardGame;
