import { makeImage } from './makeImage';


describe("makeImage script", () => {
  it('Should be function', () => {
    expect(typeof makeImage).toBe('function');
  });

	it("Create new image", async () => {
    const img = await makeImage('');
    expect(img instanceof HTMLImageElement).toBe(true);
  });

});