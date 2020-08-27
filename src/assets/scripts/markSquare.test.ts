import { markSquare } from './markSquare';


describe("markSquare script", () => {
  const sourceMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	it("markSquare is function", () => {
    expect(typeof markSquare).toEqual('function');
	});

	it("markSquare catch empty matrix error", () => {
		expect(markSquare).toThrow(Error);
	});

});
