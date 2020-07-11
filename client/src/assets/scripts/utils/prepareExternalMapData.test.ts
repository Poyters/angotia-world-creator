import { prepareExternalMapData } from './prepareExternalMapData';
import { isValidExternalMapData } from './isValidExternalMapData';


describe("prepareExternalMapData script", () => {
  const blockMatrix = [
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,'data:image/picblobexample'],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const passageMatrix = [
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

  const buildingMatrix = [
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

  const buildingContentList = {
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

  const passageContentList = {
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

  const decorationMatrix = [
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

  const subsoilMatrix = [
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,'data:image/picblobexample'],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const mobMatrix = [
    [
      [[1,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[1,0],[0,0]],
      [['data:image/picblobexample','data:image/picblobexample'],['data:image/picblobexample','data:image/picblobexample']],
      [['rafi jest git',0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,'data:image/picblobexample2']]
    ]
  ];

  const validInternalMapData = {
    id: '9',
    internalId: "05fe7586-f0dc-4265-ad9d-3fef4017a479",
    mapName: "example-map",
    minEntryLevel: 0,
    description: "example map desc",
    mapPic: "map pic path",
    visibilityRange: 8,
    size: {
      x: 3,
      y: 3
    },
    blockMatrix: blockMatrix,
    passage: {
      locations: [],
      matrix: passageMatrix
    },
    building: {
      matrix: buildingMatrix
    },
    decoration: {
      matrix: decorationMatrix
    },
    subsoil: {
      matrix: subsoilMatrix
    },
    npc: {
      matrix: subsoilMatrix
    },
    mob: {
      matrix: mobMatrix
    },
    se: {
      matrix: blockMatrix
    },
    vertex: {
      locations: [],
      matrix: passageMatrix
    }
  };

	it("Check valid data", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
		expect(isValidExternalMapData(externalData)).toBe(true);
  });

  it("Check valid data; block matrix", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.block_matrix;
		const picItem = renderedContentList.pics[0];
    const picKeyName = Object.keys(picItem)[0];

    expect(typeof externalData.block_matrix).toBe('object');
    expect(Array.isArray(externalData.block_matrix.items)).toBe(true);
    expect(Array.isArray(externalData.block_matrix.pics)).toBe(true);

    expect(renderedContentList.pics.length).toEqual(1);
    expect(renderedContentList.items.length).toEqual(1);
    expect(renderedContentList.items[0].x).toEqual(1);
    expect(renderedContentList.items[0].y).toEqual(1);
    expect(renderedContentList.items[0].xShift).toEqual(1);
    expect(renderedContentList.items[0].yShift).toEqual(0);
    expect(renderedContentList.pics[0][picKeyName]).toEqual('data:image/picblobexample');
    expect(renderedContentList.items[0].value).toEqual(`picId=${picKeyName}`);
  });

  it("Check valid data; size", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.size.x).toEqual(3);
    expect(externalData.size.y).toEqual(3);
  });

  it("Check valid data; _id", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData._id).toEqual('05fe7586-f0dc-4265-ad9d-3fef4017a479');
  });

  it("Check valid data; map name", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.map_name).toBe('example-map');
  });

  it("Check valid data; map pic", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.map_pic).toBe('map pic path');
  });

  it("Check valid data; visibility range", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.visibility_range).toBe(8);
  });

  it("Check valid data; description", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.description).toBe('example map desc');
  });

  it("Check valid data; min entry level", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.min_entry_level).toBe(0);
  });

  it("Check valid data; passage", () => {  
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.passage.content.items).toEqual(passageContentList.items);
    expect(externalData.passage.content.pics).toEqual(passageContentList.pics);
  });

  it("Check valid data; building", () => {  
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.building.items).toEqual(buildingContentList.items);
    expect(externalData.building.pics).toEqual(buildingContentList.pics);
  });

  it("Check valid data; decoration", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.decoration;
    const picItem = renderedContentList?.pics[0];
    const picKeyName = Object.keys(picItem)[0];

    expect(renderedContentList?.pics.length).toEqual(1);
    expect(renderedContentList?.items.length).toEqual(2);
    expect(renderedContentList?.items[0].x).toEqual(0);
    expect(renderedContentList?.items[0].y).toEqual(0);
    expect(renderedContentList?.items[0].xShift).toEqual(0);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.items[1].x).toEqual(0);
    expect(renderedContentList?.items[1].y).toEqual(1);
    expect(renderedContentList?.items[1].xShift).toEqual(0);
    expect(renderedContentList?.items[1].yShift).toEqual(0);
    expect(renderedContentList?.pics[0][picKeyName]).toEqual('data:image/picblob');
    expect(renderedContentList?.items[0].value).toEqual(`picId=${picKeyName}`);
    expect(renderedContentList?.items[1].value).toEqual(`picId=${picKeyName}`);
  });

  it("Check valid data; subsoil", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.subsoil;
    const picItem = renderedContentList?.pics[0];
    const picKeyName = Object.keys(picItem)[0];

    expect(renderedContentList?.pics.length).toEqual(1);
    expect(renderedContentList?.items.length).toEqual(1);
    expect(renderedContentList?.items[0].x).toEqual(1);
    expect(renderedContentList?.items[0].y).toEqual(1);
    expect(renderedContentList?.items[0].xShift).toEqual(1);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.pics[0][picKeyName]).toEqual('data:image/picblobexample');
    expect(renderedContentList?.items[0].value).toEqual(`picId=${picKeyName}`);
  });

  it("Check valid data; npc", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.npc;
    const picItem = renderedContentList?.pics[0];
    const picKeyName = Object.keys(picItem)[0];

    expect(renderedContentList?.pics.length).toEqual(1);
    expect(renderedContentList?.items.length).toEqual(1);
    expect(renderedContentList?.items[0].x).toEqual(1);
    expect(renderedContentList?.items[0].y).toEqual(1);
    expect(renderedContentList?.items[0].xShift).toEqual(1);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.pics[0][picKeyName]).toEqual('data:image/picblobexample');
    expect(renderedContentList?.items[0].value).toEqual(`picId=${picKeyName}`);
  });

  it("Check valid data; mob ", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.mob;
    const picKeyName1 = Object.keys(renderedContentList?.pics[0])[0];
    const picKeyName2 = Object.keys(renderedContentList?.pics[1])[0];

    expect(renderedContentList?.pics.length).toEqual(2);
    expect(renderedContentList?.items.length).toEqual(8);
    expect(renderedContentList?.pics[0][picKeyName1]).toEqual('data:image/picblobexample');
    expect(renderedContentList?.pics[1][picKeyName2]).toEqual('data:image/picblobexample2');

    expect(renderedContentList?.items[0].x).toEqual(0);
    expect(renderedContentList?.items[0].y).toEqual(0);
    expect(renderedContentList?.items[0].xShift).toEqual(0);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.items[0].value).toEqual(1);

    expect(renderedContentList?.items[1].x).toEqual(0);
    expect(renderedContentList?.items[1].y).toEqual(1);
    expect(renderedContentList?.items[1].xShift).toEqual(0);
    expect(renderedContentList?.items[1].yShift).toEqual(0);
    expect(renderedContentList?.items[1].value).toEqual(1);

    expect(renderedContentList?.items[2].x).toEqual(1);
    expect(renderedContentList?.items[2].y).toEqual(1);
    expect(renderedContentList?.items[2].xShift).toEqual(0);
    expect(renderedContentList?.items[2].yShift).toEqual(0);
    expect(renderedContentList?.items[2].value).toEqual(`picId=${picKeyName1}`);

    expect(renderedContentList?.items[3].x).toEqual(1);
    expect(renderedContentList?.items[3].y).toEqual(1);
    expect(renderedContentList?.items[3].xShift).toEqual(1);
    expect(renderedContentList?.items[3].yShift).toEqual(0);
    expect(renderedContentList?.items[3].value).toEqual(`picId=${picKeyName1}`);

    expect(renderedContentList?.items[4].x).toEqual(1);
    expect(renderedContentList?.items[4].y).toEqual(1);
    expect(renderedContentList?.items[4].xShift).toEqual(0);
    expect(renderedContentList?.items[4].yShift).toEqual(1);
    expect(renderedContentList?.items[4].value).toEqual(`picId=${picKeyName1}`);

    expect(renderedContentList?.items[5].x).toEqual(1);
    expect(renderedContentList?.items[5].y).toEqual(1);
    expect(renderedContentList?.items[5].xShift).toEqual(1);
    expect(renderedContentList?.items[5].yShift).toEqual(1);
    expect(renderedContentList?.items[5].value).toEqual(`picId=${picKeyName1}`);

    expect(renderedContentList?.items[6].x).toEqual(2);
    expect(renderedContentList?.items[6].y).toEqual(1);
    expect(renderedContentList?.items[6].xShift).toEqual(0);
    expect(renderedContentList?.items[6].yShift).toEqual(0);
    expect(renderedContentList?.items[6].value).toEqual('rafi jest git');

    expect(renderedContentList?.items[7].x).toEqual(2);
    expect(renderedContentList?.items[7].y).toEqual(2);
    expect(renderedContentList?.items[7].xShift).toEqual(1);
    expect(renderedContentList?.items[7].yShift).toEqual(1);
    expect(renderedContentList?.items[7].value).toEqual(`picId=${picKeyName2}`);
  });

  it("Check valid data; se matrix", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
    const renderedContentList = externalData.se;
		const picItem = renderedContentList.pics[0];
    const picKeyName = Object.keys(picItem)[0];

    expect(typeof externalData.se).toBe('object');
    expect(Array.isArray(externalData.se.items)).toBe(true);
    expect(Array.isArray(externalData.se.pics)).toBe(true);

    expect(renderedContentList.pics.length).toEqual(1);
    expect(renderedContentList.items.length).toEqual(1);
    expect(renderedContentList.items[0].x).toEqual(1);
    expect(renderedContentList.items[0].y).toEqual(1);
    expect(renderedContentList.items[0].xShift).toEqual(1);
    expect(renderedContentList.items[0].yShift).toEqual(0);
    expect(renderedContentList.pics[0][picKeyName]).toEqual('data:image/picblobexample');
    expect(renderedContentList.items[0].value).toEqual(`picId=${picKeyName}`);
  });

  it("Check valid data; vertex", () => {  
    const externalData = prepareExternalMapData(validInternalMapData);
    expect(externalData.vertex.content.items).toEqual(passageContentList.items);
    expect(externalData.vertex.content.pics).toEqual(passageContentList.pics);
  });
});