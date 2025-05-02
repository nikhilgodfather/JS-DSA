/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length;
  const forces = new Array(n).fill(0);
  let force = 0;

  // Left to Right - apply positive force for 'R'
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R") {
      force = n; // max force
    } else if (dominoes[i] === "L") {
      force = 0; // reset
    } else {
      force = Math.max(force - 1, 0); // decay
    }
    forces[i] += force;
  }

  // Right to Left - apply negative force for 'L'
  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === "L") {
      force = n;
    } else if (dominoes[i] === "R") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  // Build result based on net force
  let result = "";
  for (let f of forces) {
    if (f > 0) {
      result += "R";
    } else if (f < 0) {
      result += "L";
    } else {
      result += ".";
    }
  }

  return result;
};
