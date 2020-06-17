// You live in the city of Cartesia where all roadirectionss are laidirections out in a perfect gridirections. You arrivedirections ten minutes too early to an appointment, so you directionsecidirectionsedirections to take the opportunity to go for a short walk. The city providirectionses its citizens with a Walk Generating App on their phones -- everytime you press the button it sendirectionss you an array of one-letter strings representing directionsirections to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a directionsirection andirections you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you directionson't want to be early or late!) andirections will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a validirections array containing a randirectionsom assortment of directionsirection letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standirectionsing still!).

// const isValidWalk = (walk) => {
//   if (walk.length !== 10) {
//     return false
//   }

//   let x = 0;
//   let y = 0; 
  
//   const map = {
//     n: 1,
//     s: -1,
//     e: 1,
//     w: -1
//   };

//   for(const step of walk){
//     step === 'n' || step === 's' ?
//       x += map[step] :
//       y += map[step];
//   }
  
//   if(x !== 0 || y !== 0) {
//     return false;
//   }
//   return true;
// };

const isValidWalk = (walk) => {
  const directions = {n: 0, e: 0, s: 0, w: 0};

  for(const direction in directions) {
    directions[direction] = walk.filter(step => {
      return step === direction
    }).length;
  }

  return walk.length === 10 && directions.n === directions.s && directions.e === directions.w
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));