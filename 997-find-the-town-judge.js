/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trustCount = new Array(n + 1).fill(0);
  const trustedCount = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustCount[a]++;
    trustedCount[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === 0 && trustedCount[i] === n - 1) {
      return i;
    }
  }

  return -1;
};
