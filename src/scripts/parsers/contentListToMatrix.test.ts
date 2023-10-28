/* eslint-disable max-lines */
import { contentListToMatrix } from "./contentListToMatrix";

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
        id: "958390634",
        blob: "afwfawgf"
      }
    ]
  };

  const emptyMatrix1 = [
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ]
  ];

  const numbersContentList1 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: 1
      }
    ],
    pics: []
  };

  const numbersMatrix1 = [
    [
      [
        [1, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
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
        value: "2"
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
        value: "414safsefse0"
      }
    ],
    pics: []
  };

  const numbersMatrix2 = [
    [
      [
        [1, 0],
        [0, 0]
      ],
      [
        ["2", 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 3],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, "414safsefse0"],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ]
  ];

  const mixedContentList1 = {
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
        value: "2"
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
        value: "414safsefse0"
      },
      {
        x: 0,
        y: 1,
        xShift: 0,
        yShift: 0,
        value: "picId=85285ghobdfn-ga34e5g453g-34"
      },
      {
        x: 0,
        y: 1,
        xShift: 1,
        yShift: 0,
        value: "picId=85285ghobdfn-ga34e5g453g-34"
      }
    ],
    pics: [
      {
        id: "85285ghobdfn-ga34e5g453g-34",
        blob: "data:/jp2gmdpicblobdata"
      }
    ]
  };

  const mixedMatrix1 = [
    [
      [
        [1, 0],
        [0, 0]
      ],
      [
        ["2", 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [
          "picId=85285ghobdfn-ga34e5g453g-34",
          "picId=85285ghobdfn-ga34e5g453g-34"
        ],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 3],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, "414safsefse0"],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ]
  ];

  const imgContentList1 = {
    items: [
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 0,
        value: "picId=837468534hg34g34"
      }
    ],
    pics: [
      {
        id: "837468534hg34g34",
        blob: "datablobpicdata"
      }
    ]
  };

  const imgMatrix1 = [
    [
      [
        ["picId=837468534hg34g34", 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ]
  ];

  it("is a function", () => {
    expect(typeof contentListToMatrix).toBe("function");
  });

  it("emptyContentList1; return empty matrix", () => {
    expect(contentListToMatrix(emptyContentList1, mapSize)).toEqual(
      emptyMatrix1
    );
  });

  it("emptyContentList2; return empty matrix", () => {
    expect(contentListToMatrix(emptyContentList2, mapSize)).toEqual(
      emptyMatrix1
    );
  });

  it("numbersContentList1; return numbersMatrix1", () => {
    expect(contentListToMatrix(numbersContentList1, mapSize)).toEqual(
      numbersMatrix1
    );
  });

  it("numbersContentList2; return numbersMatrix2", () => {
    expect(contentListToMatrix(numbersContentList2, mapSize)).toEqual(
      numbersMatrix2
    );
  });

  it("mixedContentList1; return mixedMatrix1", () => {
    expect(contentListToMatrix(mixedContentList1, mapSize)).toEqual(
      mixedMatrix1
    );
  });

  it("imgContentList1; return imgMatrix1", () => {
    expect(contentListToMatrix(imgContentList1, mapSize)).toEqual(imgMatrix1);
  });
});
