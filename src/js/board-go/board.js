// Import or create JGO namespace
var JGO = JGO || {};

JGO.BOARD = JGO.BOARD || {};

JGO.BOARD.large = {
  textures: {
    black: 'images/board/black.png',
    white: 'images/board/white.png',
    shadow: 'images/board/shadow.png',
    board: 'images/board/shinkaya.jpg',
  },

  // Margins around the board, both on normal edges and clipped ones
  margin: { normal: 40, clipped: 40 },

  // Shadow color, blur and offset
  boardShadow: {
    color: '#ffe0a8', blur: 30, offX: 5, offY: 5,
  },

  // Lighter border around the board makes it more photorealistic
  border: { color: 'rgba(255, 255, 255, 0.3)', lineWidth: 2 },

  // Amount of "extra wood" around the grid where stones lie
  padding: { normal: 20, clipped: 10 },

  // Grid color and size, line widths
  grid: {
    color: '#202020',
    x: 50,
    y: 50,
    smooth: 0.0,
    borderWidth: 1.5,
    lineWidth: 1.2,
  },

  // Star point radius
  stars: { radius: 3 },

  // Coordinate color and font
  coordinates: { color: '#808080', font: 'normal 18px sanf-serif' },

  // Stone radius  and alpha for semi-transparent stones
  stone: { radius: 24, dimAlpha: 0.6 },

  // Shadow offset from center
  shadow: { xOff: -2, yOff: 2 },

  // Mark base size and line width, color and font settings
  mark: {
    lineWidth: 1.5,
    blackColor: 'white',
    whiteColor: 'black',
    clearColor: 'black',
    font: 'normal 24px sanf-serif',
  },
};

JGO.BOARD.largeWalnut = JGO.util.extend(JGO.util.extend({}, JGO.BOARD.large), {
  textures: { board: 'images/board/walnut.jpg', shadow: 'images/board/shadow_dark.png' },
  boardShadow: { color: '#e2baa0' },
  grid: { color: '#101010', borderWidth: 1.8, lineWidth: 1.5 },
});

JGO.BOARD.largeBW = JGO.util.extend(JGO.util.extend({}, JGO.BOARD.large), {
  textures: false,
});

const getPatternIndexFromURL = () => {
  const url = new URL(location);
  const params = url.searchParams;
  return params.get('pattern') || 1;
};

const getPredefinedPatterns = (index) => {
  const patterns = [
    {
      coords: [
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(5, 4),
        new JGO.Coordinate(4, 5),
        new JGO.Coordinate(7, 5),
        new JGO.Coordinate(6, 5),
        new JGO.Coordinate(6, 6),
        new JGO.Coordinate(4, 6),
      ],
      answer: new JGO.Coordinate(5, 7),
    },
    {
      coords: [
        new JGO.Coordinate(3, 2),
        new JGO.Coordinate(4, 3),
        new JGO.Coordinate(5, 3),
        new JGO.Coordinate(2, 5),
      ],
      answer: new JGO.Coordinate(2, 2),
    },
    {
      coords: [
        new JGO.Coordinate(2, 7),
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(4, 3),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(4, 8),
        new JGO.Coordinate(5, 5),
        new JGO.Coordinate(5, 6),
        new JGO.Coordinate(5, 7),
        new JGO.Coordinate(6, 8),
      ],
      answer: new JGO.Coordinate(3, 8),
    },
    {
      coords: [
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(4, 7),
        new JGO.Coordinate(5, 4),
        new JGO.Coordinate(5, 5),
        new JGO.Coordinate(5, 7),
      ],
      answer: new JGO.Coordinate(6, 6),
    },
    {
      coords: [
        new JGO.Coordinate(3, 3),
        new JGO.Coordinate(3, 4),
        new JGO.Coordinate(4, 2),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(5, 5),
        new JGO.Coordinate(6, 2),
        new JGO.Coordinate(6, 3),
        new JGO.Coordinate(6, 4),
      ],
      answer: new JGO.Coordinate(5, 1),
    },
    {
      coords: [
        new JGO.Coordinate(2, 3),
        new JGO.Coordinate(2, 4),
        new JGO.Coordinate(3, 2),
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(4, 2),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(5, 4),
        new JGO.Coordinate(6, 3),
        new JGO.Coordinate(6, 4),
      ],
      answer: new JGO.Coordinate(5, 2),
    },
    {
      coords: [
        new JGO.Coordinate(0, 5),
        new JGO.Coordinate(1, 5),
        new JGO.Coordinate(2, 4),
        new JGO.Coordinate(3, 3),
        new JGO.Coordinate(3, 4),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(5, 4),
        new JGO.Coordinate(5, 6),
        new JGO.Coordinate(6, 5),
        new JGO.Coordinate(7, 3),
        new JGO.Coordinate(7, 4),
        new JGO.Coordinate(8, 3),
      ],
      answer: new JGO.Coordinate(7, 5),
    },
    {
      coords: [
        new JGO.Coordinate(0, 3),
        new JGO.Coordinate(0, 4),
        new JGO.Coordinate(1, 4),
        new JGO.Coordinate(1, 5),
        new JGO.Coordinate(2, 6),
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(4, 3),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(4, 5),
        new JGO.Coordinate(5, 2),
        new JGO.Coordinate(5, 3),
        new JGO.Coordinate(6, 4),
        new JGO.Coordinate(7, 5),
        new JGO.Coordinate(8, 4),
        new JGO.Coordinate(8, 5),
      ],
      answer: new JGO.Coordinate(1, 6),
    },
    {
      coords: [
        new JGO.Coordinate(5, 8),
        new JGO.Coordinate(6, 7),
        new JGO.Coordinate(6, 6),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(4, 5),
        new JGO.Coordinate(5, 5),
        new JGO.Coordinate(2, 4),
        new JGO.Coordinate(3, 4),
        new JGO.Coordinate(5, 4),
        new JGO.Coordinate(3, 3),
        new JGO.Coordinate(6, 4),
        new JGO.Coordinate(7, 3),
        new JGO.Coordinate(2, 2),
        new JGO.Coordinate(3, 2),
        new JGO.Coordinate(6, 2),
        new JGO.Coordinate(7, 2),
        new JGO.Coordinate(2, 1),
        new JGO.Coordinate(3, 1),
        new JGO.Coordinate(7, 1),
        new JGO.Coordinate(8, 1),
        new JGO.Coordinate(3, 0),
      ],
      answer: new JGO.Coordinate(5, 7),
    },
    {
      coords: [
        new JGO.Coordinate(5, 8),
        new JGO.Coordinate(4, 8),
        new JGO.Coordinate(4, 7),
        new JGO.Coordinate(3, 7),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(1, 6),
        new JGO.Coordinate(2, 5),
        new JGO.Coordinate(2, 4),
        new JGO.Coordinate(3, 3),
        new JGO.Coordinate(4, 2),
        new JGO.Coordinate(4, 1),
        new JGO.Coordinate(4, 0),
        new JGO.Coordinate(5, 0),
      ],
      answer: new JGO.Coordinate(3, 2),
    },
    {
      coords: [
        new JGO.Coordinate(3, 8),
        new JGO.Coordinate(3, 7),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(4, 5),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(5, 5),
      ],
      answer: new JGO.Coordinate(3, 5),
    },
    {
      coords: [
        new JGO.Coordinate(6, 5),
        new JGO.Coordinate(7, 5),
        new JGO.Coordinate(6, 4),
        new JGO.Coordinate(5, 3),
        new JGO.Coordinate(5, 2),
        new JGO.Coordinate(4, 1),
        new JGO.Coordinate(4, 1),
        new JGO.Coordinate(3, 0),
      ],
      answer: new JGO.Coordinate(7, 3),
    },
    {
      coords: [
        new JGO.Coordinate(8, 7),
        new JGO.Coordinate(8, 6),
        new JGO.Coordinate(5, 5),
        new JGO.Coordinate(6, 5),
        new JGO.Coordinate(7, 5),
        new JGO.Coordinate(8, 5),
        new JGO.Coordinate(6, 4),
        new JGO.Coordinate(7, 3),
        new JGO.Coordinate(7, 2),
        new JGO.Coordinate(8, 2),
        new JGO.Coordinate(8, 1),
      ],
      answer: new JGO.Coordinate(8, 4),
    },
    {
      coords: [
        new JGO.Coordinate(7, 5),
        new JGO.Coordinate(7, 4),
        new JGO.Coordinate(6, 3),
        new JGO.Coordinate(6, 2),
        new JGO.Coordinate(4, 1),
        new JGO.Coordinate(6, 1),
      ],
      answer: new JGO.Coordinate(8, 1),
    },
    {
      coords: [
        new JGO.Coordinate(2, 5),
        new JGO.Coordinate(3, 5),
        new JGO.Coordinate(3, 6),
        new JGO.Coordinate(3, 7),
        new JGO.Coordinate(4, 4),
        new JGO.Coordinate(4, 5),
        new JGO.Coordinate(4, 6),
        new JGO.Coordinate(5, 0),
        new JGO.Coordinate(5, 2),
        new JGO.Coordinate(5, 3),
        new JGO.Coordinate(5, 7),
        new JGO.Coordinate(6, 0),
        new JGO.Coordinate(6, 1),
        new JGO.Coordinate(6, 2),
        new JGO.Coordinate(6, 4),
        new JGO.Coordinate(6, 7),
        new JGO.Coordinate(6, 8),
        new JGO.Coordinate(7, 3),
        new JGO.Coordinate(7, 8),
        new JGO.Coordinate(8, 8),
      ],
      answer: new JGO.Coordinate(4, 8),
    },
    {
      coords: [
        new JGO.Coordinate(1, 8),
        new JGO.Coordinate(0, 7),
        new JGO.Coordinate(2, 7),
        new JGO.Coordinate(0, 6),
        new JGO.Coordinate(2, 6),
        new JGO.Coordinate(1, 5),
      ],
      answer: new JGO.Coordinate(2, 6),
    },
    {
      coords: [
        new JGO.Coordinate(1, 8),
        new JGO.Coordinate(0, 7),
        new JGO.Coordinate(2, 7),
        new JGO.Coordinate(0, 6),
        new JGO.Coordinate(2, 6),
        new JGO.Coordinate(1, 5),
      ],
      answer: new JGO.Coordinate(2, 3),
    },
  ];
  const selected = patterns[index];
  return selected || { coords: [], answer: new JGO.Coordinate(0, 0) };
};

const updateCaptures = function (node) {
  document.getElementById('black-captures').innerText = node.info.captures[JGO.BLACK];
  document.getElementById('white-captures').innerText = node.info.captures[JGO.WHITE];
};

const jrecord = new JGO.Record(13);
const { jboard } = jrecord;
const jsetup = new JGO.Setup(jboard, JGO.BOARD.largeWalnut);
let player = JGO.WHITE; // next player
let ko = false;
let lastMove = false; // ko coordinate and last move coordinate
let lastHover = false;
let lastX = -1;
let lastY = -1; // hover helper vars

const patternIndex = getPatternIndexFromURL();
const pattern = getPredefinedPatterns(patternIndex - 1);

// place pre-defined stone; starts with black
let currentPredefinedStone = JGO.BLACK;
pattern.coords.forEach((coords) => {
  jboard.setType(coords, currentPredefinedStone);
  currentPredefinedStone = currentPredefinedStone === JGO.BLACK ? JGO.WHITE : JGO.BLACK;
});

player = currentPredefinedStone === JGO.BLACK ? JGO.WHITE : JGO.BLACK;

// jboard.setType(JGO.util.getHandicapCoordinates(jboard.width, 2), JGO.BLACK);

jsetup.setOptions({ stars: { points: 5 } });
jsetup.create('board', (canvas) => {
  canvas.addListener('click', (coord, ev) => {
    const opponent = (player === JGO.BLACK) ? JGO.WHITE : JGO.BLACK;

    if (ev.shiftKey) { // on shift do edit
      if (jboard.getMark(coord) === JGO.MARK.NONE) {
        jboard.setMark(coord, JGO.MARK.SELECTED);
      } else {
        jboard.setMark(coord, JGO.MARK.NONE);
      }

      return;
    }

    // clear hover away - it'll be replaced or then it will be an illegal move
    // in any case so no need to worry about putting it back afterwards
    if (lastHover) {
      jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);
    }

    lastHover = false;

    const play = jboard.playMove(coord, player, ko);

    if (play.success) {
      const node = jrecord.createNode(true);
      node.info.captures[player] += play.captures.length; // tally captures
      node.setType(coord, player); // play stone
      node.setType(play.captures, JGO.CLEAR); // clear opponent's stones

      if (lastMove) {
        node.setMark(lastMove, JGO.MARK.NONE);
      } // clear previous mark
      if (ko) {
        node.setMark(ko, JGO.MARK.NONE);
      } // clear previous ko mark

      node.setMark(coord, JGO.MARK.CIRCLE); // mark move
      lastMove = coord;

      if (play.ko) {
        node.setMark(play.ko, JGO.MARK.CIRCLE);
      } // mark ko, too
      ko = play.ko;

      player = opponent;
      updateCaptures(node);
    } else {
      alert(`Illegal move: ${play.errorMsg}`);
    }
  });

  canvas.addListener('mousemove', (coord, ev) => {
    if (coord.i === -1 || coord.j === -1 || (coord.i === lastX && coord.j === lastY)) {
      return;
    }

    if (lastHover) // clear previous hover if there was one
    {
      jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);
    }

    lastX = coord.i;
    lastY = coord.j;

    if (jboard.getType(coord) === JGO.CLEAR && jboard.getMark(coord) === JGO.MARK.NONE) {
      jboard.setType(coord, player === JGO.WHITE ? JGO.DIM_WHITE : JGO.DIM_BLACK);
      lastHover = true;
    } else {
      lastHover = false;
    }
  });

  canvas.addListener('mouseout', (ev) => {
    if (lastHover) {
      jboard.setType(new JGO.Coordinate(lastX, lastY), JGO.CLEAR);
    }

    lastHover = false;
  });
});
