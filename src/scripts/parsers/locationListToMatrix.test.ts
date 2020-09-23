import { locationListToMatrix } from './locationListToMatrix';
import { IPassageLocation } from '../../interfaces/passage.interface';


describe("locationListToMatrix script", () => {
  const mapSize = {x: 5, y: 5};
  const noArray: any = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: "1.0, 0.0",
    x: 1,
    xShift: 0,
    y: 0,
    yShift: 0
  };

  const oneLocation: IPassageLocation[] = [
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "1.0, 0.0",
      x: 1,
      xShift: 0,
      y: 0,
      yShift: 0
    }
  ];

  const invalidLocation: IPassageLocation[] = [
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "6.0, 0.0",
      x: 6,
      xShift: 0,
      y: 0,
      yShift: 0
    }
  ];

  const multiplyLocations: IPassageLocation[] = [
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "1.0, 0.0",
      x: 1,
      xShift: 0,
      y: 0,
      yShift: 0
    },
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "0.1, 0.0",
      x: 0,
      xShift: 1,
      y: 0,
      yShift: 0
    },
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "0.0, 0.0",
      x: 0,
      xShift: 0,
      y: 0,
      yShift: 0
    },
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "0.0, 0.1",
      x: 0,
      xShift: 0,
      y: 0,
      yShift: 1
    },
    {
      destination: {
        mapTargetCords: 4,
        mapTargetId: 4
      },
      id: "0.1, 0.1",
      x: 0,
      xShift: 1,
      y: 0,
      yShift: 1
    }
  ];

  const oneLocationMatrix = [
    [
      [[0, 0], [0, 0]], [[1, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ], 
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ]
  ];

  const multiplyLocationsMatrix = [
    [
      [[1, 1], [1, 1]], [[1, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ], 
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ]
  ];

  const emptyMatrix = [
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ], 
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ],
    [
      [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
    ]
  ];
  
  it("is a function", () => {
		expect(typeof locationListToMatrix).toBe('function');
  });

  it("convert one location; array", () => {
		expect(locationListToMatrix(oneLocation, mapSize)).toEqual(oneLocationMatrix);
  });

  it("convert noArray; invalid", () => {
		expect(locationListToMatrix(noArray, mapSize)).toEqual(emptyMatrix);
  });

  it("convert multiply locations; array", () => {
    expect(locationListToMatrix(multiplyLocations, mapSize))
      .toEqual(multiplyLocationsMatrix);
  });

  it("convert invalid location; array", () => {
    expect(locationListToMatrix(invalidLocation, mapSize))
      .toEqual(null);
  });
});