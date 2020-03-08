//Import component
import { sizeGuard } from './sizeGuard';

describe("sizeGuard script", () => {
  const fakeFile = {
    size: 500000 // bytes
  };

  it('Should be function', () => {
    expect(typeof sizeGuard).toBe('function');
  });

	it("sizeGuard work without crashes", () => {
    sizeGuard(fakeFile, 500);
  });

  it("sizeGuard allow add image", () => {
    expect(sizeGuard(fakeFile, 550)).toBe(true);
  });

  it("sizeGuard doesn't allow add image/equal", () => { // equal case
    expect(sizeGuard(fakeFile, 500)).toBe(false); // file.size should be smaller than guard value
  });

  it("sizeGuard doesn't allow add image/smaller", () => {
    expect(sizeGuard(fakeFile, 450)).toBe(false);
  });
});