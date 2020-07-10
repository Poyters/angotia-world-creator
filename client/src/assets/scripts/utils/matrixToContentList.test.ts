import { matrixToContentList } from './matrixToContentList';
import { deepCopy } from './deepCopy';


describe("matrixToContentList script", () => {
  const exampleMatrix1 = [
    [
      [[1,1],[1,1]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const contentList1 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 0,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 1,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 1,
        value: 1
      }
    ],
    pics: []
  };

  const exampleMatrix2 = [
    [
      [[1,1],[1,1]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[2,0],['agawgaw',0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,953]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const contentList2 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 0,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 1,
        value: 1
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 1,
        value: 1
      },
      {
        x: 1,
        y: 1,
        xShift: 0,
        yShift: 0,
        value: 2
      },
      {
        x: 1,
        y: 1,
        xShift: 0,
        yShift: 1,
        value: 'agawgaw'
      },
      {
        x: 0,
        y: 2,
        xShift: 1,
        yShift: 1,
        value: 953
      }
    ],
    pics: []
  };

  const exampleMatrix3 = [
    [
      [['data:image/picblob',0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [['data:image/picblob',0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const contentList3 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: '8t309t3gj30g534'
      },
      {
        x: 0,
        y: 1,
        xShift: 0,
        yShift: 0,
        value: '8t309t3gj30g534'
      }
    ],
    pics: [
      {
        '8t309t3gj30g534': 'data:image/picblob'
      }
    ]
  };


	it("Check valid data; exampleMatrix1", () => {
    const copyOfMatrix = deepCopy(exampleMatrix1);
    const renderedContentList = matrixToContentList(copyOfMatrix);
  
		expect(renderedContentList).toEqual(contentList1);
  });

  it("Check valid data; exampleMatrix2", () => {
    const copyOfMatrix = deepCopy(exampleMatrix2);
    const renderedContentList = matrixToContentList(copyOfMatrix);
  
		expect(renderedContentList).toEqual(contentList2);
  });

  it("Check valid data; exampleMatrix3", () => {
    const copyOfMatrix = deepCopy(exampleMatrix3);
    const renderedContentList = matrixToContentList(copyOfMatrix);
  
		expect(renderedContentList).toEqual(contentList3);
  });

});