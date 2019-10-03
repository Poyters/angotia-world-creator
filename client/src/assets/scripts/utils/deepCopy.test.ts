//Import component
import { deepCopy } from './deepCopy';

describe("deepCopy script", () => {
	const nestedArray: any[] = [
		[[1,0], 1, 2],
		[[[2],[1]], 1],
		[[[[[1, 2]], 1]]]
	];

	it("Create deep copy of nested array", () => {
		const copy = deepCopy(nestedArray);
    expect(copy).not.toBe(nestedArray);
  });

});