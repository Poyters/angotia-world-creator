//Import component
import { makeImage } from './makeImage';

describe("makeImage script", () => {
	it("Create new image", () => {
    expect(makeImage('') instanceof HTMLImageElement).toBe(true);
  });

});