import { makeImage } from './makeImage';


describe("makeImage script", () => {
  it('Should be function', () => {
    expect(typeof makeImage).toBe('function');
  });

	it("Create new image", () => {
    expect(makeImage('') instanceof HTMLImageElement).toBe(true);
  });

});