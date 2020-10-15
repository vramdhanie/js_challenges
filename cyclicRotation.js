function solution(list, n) {
  if (list.length === 0) {
    return list;
  }
  const rotate = n % list.length;
  if (rotate === 0) {
    return list;
  }
  list.unshift(...list.splice(list.length - rotate));
  return list;
}

module.exports = solution;
