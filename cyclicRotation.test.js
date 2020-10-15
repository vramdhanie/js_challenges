const solution = require("./cyclicRotation");

describe("Cyclic Rotation", () => {
  it("Should return an array unchanged is shift is 0", () => {
    expect(solution([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it("Should rotate by 1", () => {
    expect(solution([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });

  it("Should rotate by 2", () => {
    expect(solution([1, 2, 3], 2)).toEqual([2, 3, 1]);
  });

  it("Should return unchanged when n = length", () => {
    expect(solution([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it("Should rotate by 1 when n > length by 1", () => {
    expect(solution([1, 2, 3], 4)).toEqual([3, 1, 2]);
  });

  it("Should not change an empty array", () => {
    expect(solution([], 4)).toEqual([]);
  });
});
