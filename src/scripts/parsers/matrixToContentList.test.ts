/* eslint-disable max-lines */
import { matrixToContentList } from './matrixToContentList';
import { deepCopy } from '../utils/deepCopy';
import { IInternalImageData } from '../../interfaces/images.interface';
import { MapPicData } from '../../models/mapPicData.model';


describe("matrixToContentList script", () => {
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
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 0,
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 1,
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 1,
        value: '1'
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
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 0,
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 0,
        yShift: 1,
        value: '1'
      },
      {
        x: 0,
        y: 0,
        xShift: 1,
        yShift: 1,
        value: '1'
      },
      {
        x: 1,
        y: 1,
        xShift: 0,
        yShift: 0,
        value: '2'
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
        value: '953'
      }
    ],
    pics: []
  };

  const exampleMatrix3 = [
    [
      [[`${MapPicData.suffix}pic1`,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[`${MapPicData.suffix}pic1`,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const exampleMatrix4 = [
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,`${MapPicData.suffix}pic2`],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ]
  ];

  const exampleMatrix5 = [
    [
      [[1,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]
    ],
    [
      [[1,0],[0,0]],
      [[`${MapPicData.suffix}pic2`,`${MapPicData.suffix}pic2`],[`${MapPicData.suffix}pic2`,`${MapPicData.suffix}pic2`]],
      [['rafi jest git',0],[0,0]]
    ],
    [
      [[0,0],[0,0]],[[0,0],[0,0]],[[0,0],[0,`${MapPicData.suffix}pic3`]]
    ]
  ];

  it("is a function", () => {
		expect(typeof matrixToContentList).toBe('function');
  });

	it("Check valid data; exampleMatrix1", () => {
    const copyOfMatrix = deepCopy(exampleMatrix1);
    const renderedContentList = matrixToContentList(copyOfMatrix, internalImages);
  
		expect(renderedContentList).toEqual(contentList1);
  });

  it("Check valid data; exampleMatrix2", () => {
    const copyOfMatrix = deepCopy(exampleMatrix2);
    const renderedContentList = matrixToContentList(copyOfMatrix, internalImages);
  
		expect(renderedContentList).toEqual(contentList2);
  });

  it("Check valid data; exampleMatrix3", () => {
    const copyOfMatrix = deepCopy(exampleMatrix3);
    const renderedContentList = matrixToContentList(copyOfMatrix, internalImages);
    const picItem = renderedContentList?.pics[0];

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
    expect(renderedContentList?.pics[0].blob).toEqual('data:image/picblob');
    expect(renderedContentList?.items[0].value).toEqual(`picId=${picItem._id}`);
    expect(renderedContentList?.items[1].value).toEqual(`picId=${picItem._id}`);
  });

  it("Check valid data; exampleMatrix4", () => {
    const copyOfMatrix = deepCopy(exampleMatrix4);
    const renderedContentList = matrixToContentList(copyOfMatrix, internalImages);
    const picItem = renderedContentList?.pics[0];

    expect(renderedContentList?.pics.length).toEqual(1);
    expect(renderedContentList?.items.length).toEqual(1);
    expect(renderedContentList?.items[0].x).toEqual(1);
    expect(renderedContentList?.items[0].y).toEqual(1);
    expect(renderedContentList?.items[0].xShift).toEqual(1);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.pics[0].blob).toEqual('data:image/picblobexample');
    expect(renderedContentList?.items[0].value).toEqual(`picId=${picItem._id}`);
  });

  it("Check valid data; exampleMatrix5", () => {
    const copyOfMatrix = deepCopy(exampleMatrix5);
    const renderedContentList = matrixToContentList(copyOfMatrix, internalImages);
    const picId1 = renderedContentList?.pics[0]._id;
    const picId2 = renderedContentList?.pics[1]._id;

    expect(renderedContentList?.pics.length).toEqual(2);
    expect(renderedContentList?.items.length).toEqual(8);
    expect(renderedContentList?.pics[0].blob).toEqual('data:image/picblobexample');
    expect(renderedContentList?.pics[1].blob).toEqual('data:image/picblobexample2');

    expect(renderedContentList?.items[0].x).toEqual(0);
    expect(renderedContentList?.items[0].y).toEqual(0);
    expect(renderedContentList?.items[0].xShift).toEqual(0);
    expect(renderedContentList?.items[0].yShift).toEqual(0);
    expect(renderedContentList?.items[0].value).toEqual('1');

    expect(renderedContentList?.items[1].x).toEqual(0);
    expect(renderedContentList?.items[1].y).toEqual(1);
    expect(renderedContentList?.items[1].xShift).toEqual(0);
    expect(renderedContentList?.items[1].yShift).toEqual(0);
    expect(renderedContentList?.items[1].value).toEqual('1');

    expect(renderedContentList?.items[2].x).toEqual(1);
    expect(renderedContentList?.items[2].y).toEqual(1);
    expect(renderedContentList?.items[2].xShift).toEqual(0);
    expect(renderedContentList?.items[2].yShift).toEqual(0);
    expect(renderedContentList?.items[2].value).toEqual(`picId=${picId1}`);

    expect(renderedContentList?.items[3].x).toEqual(1);
    expect(renderedContentList?.items[3].y).toEqual(1);
    expect(renderedContentList?.items[3].xShift).toEqual(1);
    expect(renderedContentList?.items[3].yShift).toEqual(0);
    expect(renderedContentList?.items[3].value).toEqual(`picId=${picId1}`);

    expect(renderedContentList?.items[4].x).toEqual(1);
    expect(renderedContentList?.items[4].y).toEqual(1);
    expect(renderedContentList?.items[4].xShift).toEqual(0);
    expect(renderedContentList?.items[4].yShift).toEqual(1);
    expect(renderedContentList?.items[4].value).toEqual(`picId=${picId1}`);

    expect(renderedContentList?.items[5].x).toEqual(1);
    expect(renderedContentList?.items[5].y).toEqual(1);
    expect(renderedContentList?.items[5].xShift).toEqual(1);
    expect(renderedContentList?.items[5].yShift).toEqual(1);
    expect(renderedContentList?.items[5].value).toEqual(`picId=${picId1}`);

    expect(renderedContentList?.items[6].x).toEqual(2);
    expect(renderedContentList?.items[6].y).toEqual(1);
    expect(renderedContentList?.items[6].xShift).toEqual(0);
    expect(renderedContentList?.items[6].yShift).toEqual(0);
    expect(renderedContentList?.items[6].value).toEqual('rafi jest git');

    expect(renderedContentList?.items[7].x).toEqual(2);
    expect(renderedContentList?.items[7].y).toEqual(2);
    expect(renderedContentList?.items[7].xShift).toEqual(1);
    expect(renderedContentList?.items[7].yShift).toEqual(1);
    expect(renderedContentList?.items[7].value).toEqual(`picId=${picId2}`);
  });

});