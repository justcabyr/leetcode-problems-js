/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map(),
    set = new Set();

  for (let e of arr) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  }

  for (let freq of map.values()) {
    if (set.has(freq)) return false;
    set.add(freq);
  }
  return true;
};
