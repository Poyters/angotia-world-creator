import { contentListToMatrix } from './contentListToMatrix';


describe("contentListToMatrix script", () => {
  const mapSize = {
    x: 3,
    y: 3
  };

  const emptyContentList1 = {
    items: [],
    pics: []
  };
  
  const emptyContentList2 = {
    items: [],
    pics: [
      {
        _id: '958390634',
        blob: 'afwfawgf'
      }
    ]
  };

  const emptyMatrix1 = [
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const numbersContentList1 = {
    items: [{
      x: 0,
      y: 0,
      xShift: 0,
      yShift: 0,
      value: 1
    }],
    pics: []
  };

  const numbersMatrix1 = [
    [
      [[1,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const numbersContentList2 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: 1
      },
      {
        x: 1,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: '2'
      },
      {
        x: 2,
        y: 1,
        xShift: 1,
        yShift: 0,
        value: 3
      },
      {
        x: 1,
        y: 2,
        xShift: 1,
        yShift: 0,
        value: '414safsefse0'
      }
    ],
    pics: []
  };

  const numbersMatrix2 = [
    [
      [[1,0],[0,0]],[['2',0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,3],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,'414safsefse0'],[0,0]],[[0,0],[0,0]]
    ]
  ];

  it("is a function", () => {
		expect(typeof contentListToMatrix).toBe('function');
  });

	it("emptyContentList1; return empty matrix", () => {
		expect(contentListToMatrix(emptyContentList1, mapSize)).toEqual(emptyMatrix1);
  });

  it("emptyContentList2; return empty matrix", () => {
		expect(contentListToMatrix(emptyContentList2, mapSize)).toEqual(emptyMatrix1);
  });

  it("numbersContentList1; return numbersMatrix1", () => {
		expect(contentListToMatrix(numbersContentList1, mapSize)).toEqual(numbersMatrix1);
  });

  it("numbersContentList2; return numbersMatrix2", () => {
		expect(contentListToMatrix(numbersContentList2, mapSize)).toEqual(numbersMatrix2);
  });
});