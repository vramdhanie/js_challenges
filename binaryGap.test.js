const solution = require("./binaryGap");

describe("Binary Gap", () => {
  it("should return 0 for integer 0", () => {
    expect(solution(0)).toBe(0);
  });
  it("should return 2 for integer 9 (1001)", () => {
    expect(solution(9)).toBe(2);
  });
  it("should return 4 for integer 529 (1000010001)", () => {
    expect(solution(529)).toBe(4);
  });
  it("should return 1 for integer 20 (10100)", () => {
    expect(solution(20)).toBe(1);
  });
  it("should return 0 for integer 15 (1111)", () => {
    expect(solution(15)).toBe(0);
  });
  it("should return 0 for integer 32 (100000)", () => {
    expect(solution(32)).toBe(0);
  });
  it("should return 5 for integer 1041 (10000010001)", () => {
    expect(solution(1041)).toBe(5);
  });
});
