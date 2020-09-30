import { findPicBlob } from './findPicBlob';
import { IInternalImageData } from '../../interfaces/internalImageData.interface';


describe("findPicBlob script", () => {
  const internalImages: IInternalImageData[] = [
    {
      id: 'pic1',
      blob: 'data:image/picblob'
    },
    {
      id: 'pic2',
      blob: 'data:image/picblobexample'
    },
    {
      id: 'pic3',
      blob: 'data:image/picblobexample2'
    }
  ];


  it("is a function", () => {
		expect(typeof findPicBlob).toBe('function');
  });

  it("find blob, 1 with suffix", () => {
		expect(findPicBlob('picId=pic1', internalImages)).toBe('data:image/picblob');
  });

  it("find blob, 2 with suffix", () => {
		expect(findPicBlob('picId=pic2', internalImages)).toBe('data:image/picblobexample');
  });

  it("find blob, 3 with suffix", () => {
		expect(findPicBlob('picId=pic3', internalImages)).toBe('data:image/picblobexample2');
  });

  it("find blob, 1", () => {
		expect(findPicBlob('pic1', internalImages)).toBe('data:image/picblob');
  });

  it("find blob, 2", () => {
		expect(findPicBlob('pic2', internalImages)).toBe('data:image/picblobexample');
  });

  it("find blob, 3", () => {
		expect(findPicBlob('pic3', internalImages)).toBe('data:image/picblobexample2');
  });

  it("find blob, not 1", () => {
		expect(findPicBlob('pic4', internalImages)).toBe(null);
  });

  it("find blob, not 2", () => {
		expect(findPicBlob('', internalImages)).toBe(null);
  });

  it("find blob, not 3", () => {
		expect(findPicBlob('', [])).toBe(null);
  });

  it("find blob, not 4", () => {
		expect(findPicBlob('pic3', [])).toBe(null);
  });
});