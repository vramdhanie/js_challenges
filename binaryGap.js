function solution(n) {
  return n
    .toString(2)
    .split("")
    .map((e, i) => (e == 1 ? i : -1))
    .filter((e) => e != -1)
    .reduce((a, c, i, ar) => {
      if (i < ar.length - 1) {
        const gap = ar[i + 1] - c - 1;
        a = gap > a ? gap : a;
      }
      return a;
    }, 0);
}

module.exports = solution;
