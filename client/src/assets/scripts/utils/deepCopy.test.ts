import { deepCopy } from './deepCopy';


// DeepCopy should support int, string, float
describe("deepCopy script", () => {
	const nestedArrayInt: any[] = [
		[[1,0], 1, 2],
		[[[2],[1]], 1],
		[[[[[1, 2]], 1]]]
	];

	const nestedArrayMix: any[] = [
		[
			['fafawfaw', 0, -2],
			[2.043534, 4, '']
		],
		[
			'empty'
		]
	];

	const nestedArrayString: any[] = [
		['string array', `astingdrn`],
		[[[[['itga']]]]]
	];

	const nestedArrayFloat: any[] = [
		[2.11124124, 12.11111111111111111111111111111],
		[[[[[0.00000000000000001]]]]]
	];

	it("Create deep copy of nested array with ints", () => {
		const copy = deepCopy(nestedArrayInt);
		expect(copy).not.toBe(nestedArrayInt);
		expect(copy).toEqual([
			[[1,0], 1, 2],
			[[[2],[1]], 1],
			[[[[[1, 2]], 1]]]
		]);
	});
	
	it("Create deep copy of nested array with mixed types", () => {
		const copy = deepCopy(nestedArrayMix);
		expect(copy).not.toBe(nestedArrayMix);
		expect(copy).toEqual([
			[
				['fafawfaw', 0, -2],
				[2.043534, 4, '']
			],
			[
				'empty'
			]
		]);
	});
	
	it("Create deep copy of nested array with strings", () => {
		const copy = deepCopy(nestedArrayString);
		expect(copy).not.toBe(nestedArrayString);
		expect(copy).toEqual([
			['string array', `astingdrn`],
			[[[[['itga']]]]]
		]);
	});
	
	it("Create deep copy of nested array with strings", () => {
		const copy = deepCopy(nestedArrayFloat);
		expect(copy).not.toBe(nestedArrayFloat);
		expect(copy).toEqual([
			[2.11124124, 12.11111111111111111111111111111],
			[[[[[0.00000000000000001]]]]]
		]);
  });

});