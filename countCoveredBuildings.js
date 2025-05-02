var countCoveredBuildings = function (n, buildings) {
  let buildingsCount = 0;

  for (let i = 0; i < buildings.length; i++) {
    const [x, y] = buildings[i];

    let hasLeft = false;
    let hasRight = false;
    let hasAbove = false;
    let hasBelow = false;

    for (let j = 0; j < buildings.length; j++) {
      if (i === j) continue;

      const [x2, y2] = buildings[j];

      // Same row
      if (x2 === x) {
        if (y2 < y) hasLeft = true;
        if (y2 > y) hasRight = true;
      }

      // Same column
      if (y2 === y) {
        if (x2 < x) hasAbove = true;
        if (x2 > x) hasBelow = true;
      }
    }

    if (hasLeft && hasRight && hasAbove && hasBelow) {
      buildingsCount++;
    }
  }

  return buildingsCount;
};

console.log(
  countCoveredBuildings(
    (n = 3),
    (buildings = [
      [1, 2],
      [3, 1],
      [1, 1],
      [3, 2],
      [1, 3],
    ])
  )
);
