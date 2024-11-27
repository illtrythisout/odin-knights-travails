function knightMoves(start, end) {
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  let queue = [
    [start, [start]], // [currentPosition, pathSoFar]
  ];
  let visited = new Set();

  // breadth-first-traversal algorithm to search all possible knight moves until it reaches the end vertex
  // keeps track of each path taken in pathSoFar, the first to reach the end will then have the pathSoFar show its path
  while (queue.length > 0) {
    let [currentPosition, pathSoFar] = queue.shift(); // gets current position and the pathSoFar of the first queue elements

    // if the end is reached, console.log the shortest path
    if (currentPosition.toString() === end.toString()) {
      console.log(
        `You made it in ${pathSoFar.length - 1} moves!  Here's your path:`
      );
      pathSoFar.forEach((move) => console.log(move));
      return;
    }

    // only check all enqueue all possible neighbors if the position was not visited yet
    if (!visited.has(currentPosition.toString())) {
      visited.add(currentPosition.toString());

      moves
        .map(([dx, dy]) => {
          return [currentPosition[0] + dx, currentPosition[1] + dy];
        })
        .filter(isValid)
        .forEach((newPosition) => {
          queue.push([newPosition, [...pathSoFar, newPosition]]);
        });
    }
  }
}
