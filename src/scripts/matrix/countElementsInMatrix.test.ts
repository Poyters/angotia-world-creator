import { countElementsInMatrix } from './countElementsInMatrix';


describe("countElementsInMatrix script", () => {
  const emptyMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
  ];
  
  const filledMatrix: any[] = [
		[[[0, 1], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 2]], [[0, 'astrea'], [0, {grtsrt: 'fe'}]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 6]], [[0, 0], [0, 0]], [[0, -2], [0, 0]]]
  ];
  
  const filledMatrix1: any[] = [
		[[[5, 1], [0, undefined]], [[0, 1], [0, 6]], [[0, 0], [0, 0]]],
		[[[3, null], [0, 2]], [[0, 'astrea'], [0, {grtsrt: 'fe'}]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 6]], [[0, 0], [0, 0]], [[0, -2], [0, 0]]]
	];

  it("is a function", () => {
    expect(typeof countElementsInMatrix).toEqual('function');
  });
  
  it("count empty", () => {
    expect(countElementsInMatrix(emptyMatrix)).toBe(0);
  });
  
  it("count filled", () => {
    expect(countElementsInMatrix(filledMatrix)).toBe(6);
  });
  
  it("count filled 1", () => {
    expect(countElementsInMatrix(filledMatrix1)).toBe(12);
	});
});