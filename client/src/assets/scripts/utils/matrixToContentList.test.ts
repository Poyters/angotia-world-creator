import { matrixToContentList } from './matrixToContentList';
import { deepCopy } from './deepCopy';


describe("matrixToContentList script", () => {
	const exampleMatrix = [
    [],
    [],
    []
  ];

  const contentList = [
    {
      x: 0,
      y: 0,
      xShift: 1,
      yShift: 0,
      value: 0
    }
  ];

	it("Check valid data", () => {
    const copyOfMatrix = deepCopy(exampleMatrix);
    const renderedContentList = matrixToContentList(exampleMatrix);
  
		expect(renderedContentList).toEqual(copyOfMatrix);
  });

});