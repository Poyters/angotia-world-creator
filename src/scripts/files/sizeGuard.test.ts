import { sizeGuard } from './sizeGuard';


describe('sizeGuard script', () => {
  const fakeFile = {
    size: 500000 // bytes
  };

  it('Should be function', () => {
    expect(typeof sizeGuard).toBe('function');
  });

	it('Work without crashes', () => {
    sizeGuard(fakeFile, 500);
  });

  it('Allow add image', () => {
    expect(sizeGuard(fakeFile, 550)).toBe(true);
  });

  it("Doesn't allow add image/equal", () => { // equal case
    expect(sizeGuard(fakeFile, 500)).toBe(false); // file.size should be smaller than guard value
  });

  it("Doesn't allow add image/smaller", () => {
    expect(sizeGuard(fakeFile, 450)).toBe(false);
  });

  it("Doesn't allow add image/invalid props", () => {
    expect(sizeGuard({}, 100)).toBe(false);
  });
});