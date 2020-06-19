// const loop_size = (node) => {
//   const visitedNodes = [];
//   let index = -1;

//   while (node) {
//     index = visitedNodes.indexOf(node);
//     if (index < 0) {
//       visitedNodes.push(node);
//     } else {
//       break;
//     }
//     node = node.getNext();
//   }
//   const length = visitedNodes.length - index;
//   return length;
// };


const loop_size = (node) => {
  // pick any node to start, as hare moves 2x turtle, it will eventually
  let hare = node;
  let turtle = node;
  do  {
    turtle = turtle.getNext();
    hare = hare.getNext().getNext();
  }
  while (turtle !== hare);

  let count = 0;
  do  {
    count++;
    hare = hare.getNext();
  }
  while (turtle !== hare);
  return count;
};