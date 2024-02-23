/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const INF = Number.MAX_SAFE_INTEGER;

  const minCost = new Array(n).fill(INF);

  minCost[src] = 0;

  for (let i = 0; i <= k; i++) {
    const temp = [...minCost];
    for (const [from, to, price] of flights) {
      if (minCost[from] + price < temp[to]) {
        temp[to] = minCost[from] + price;
      }
    }
    minCost.splice(0, n, ...temp);
  }
  return minCost[dst] === INF ? -1 : minCost[dst];
};


//Bellman-Ford algorithm