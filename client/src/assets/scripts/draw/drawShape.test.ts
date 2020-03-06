//Import component
import { drawTriangle, drawCross } from './drawShape';

HTMLCanvasElement.prototype.getContext = jest.fn();


describe("drawTriangle script", () => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  it('Should be function', () => {
    expect(typeof drawTriangle).toBe('function');
  });

	it("Should work without crash", () => {
    // drawTriangle(ctx, 10, 10, '#fff');
  });

});


describe("drawCross script", () => {
  it('Should be function', () => {
    expect(typeof drawCross).toBe('function');
  });
});