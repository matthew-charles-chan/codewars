const damagedOrSunk = (board, attacks) => {
  const scoring = {
    damaged: 0.5,
    sunk: 1,
    notTouched: -1
  };

  const hello = {
        var: {
          new: { 
        }
      }
  // create ship dict with count and position
  const ships = {};

  
  board.map((col) => {
    col.forEach((pos) => {
      if (pos === 0) {
        return;
      }
      if (ships[pos]) {
        ships[pos].count ++;
      } else {
        ships[pos] = {
          count: 1,
          status: 'notTouched'
        };
      }
    });
  });

  attacks.forEach((attack) => {
    const res = board[attack[1] - 1][attack[0] - 1];
    if (res) {
      ships[res].count --;
      board[attack[0] - 1][attack[1] - 1] = 0;
      if (ships[res].count > 0) {
        ships[res].status = 'damaged';
      } else {
        ships[res].status = 'sunk';
      }
    }
  });

  const shipsStatus = {
    sunk: 0,
    damaged: 0,
    notTouched: 0,
  };
  for (const ship in ships) {
    const status = ships[ship].status;
    shipsStatus[status] ++;
  }
  

  let points = 0;

  for (const status in shipsStatus) {
    console.log(scoring[status]);
    points += scoring[status] * shipsStatus[status];
  }
  
  return  {
    ...shipsStatus,
    points: points
  };
  
};


// const board =
// [ [0, 0, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 1, 0] ];
          
// const attacks = [[3, 1], [3, 2], [3, 3]];
// const result = damagedOrSunk(board, attacks);

const board = [ [3, 0, 1],
  [3, 0, 1],
  [0, 2, 1],
  [0, 2, 0] ];

const attacks = [[2, 1], [2, 2], [ 3, 2], [3, 3]];
const result = damagedOrSunk(board, attacks);
console.log(result);
