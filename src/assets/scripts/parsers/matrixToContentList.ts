import { deepCopy } from '../utils/deepCopy';
import { IContentList, IContentItem } from '../../interfaces/contentList';
import uuid from 'uuid/v4';


export const matrixToContentList = (matrix: any): IContentList => {
  const contentList: IContentList = {
    items: [],
    pics: []
  };

  if (!matrix || !Array.isArray(matrix)) return contentList;

  const copyOfmatrix: Array<[]> = deepCopy(matrix);

  copyOfmatrix.map((yAxis: Array<number>, y:number) => {
    yAxis.map((field: number, x: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.map((square: number | string, index: number) => {
        const xShift: number = index === 1 || index === 3 ?  1 : 0;
        const yShift: number = index === 2 || index === 3 ? 1 : 0;

        // generate contentItem only from not empty matrix squares
        if (square !== 0 && square !== '0') { 
          let contentItemValue: string | number = '';

          // square is a image
          if (square.toString().includes('data:image/')) {
            let found: boolean = false;

            for (const picItem of contentList.pics) {            
              if (picItem.blob === square) {
                contentItemValue = `picId=${picItem._id}`;
                found = true;
              }
            }

            if (!found) { // image is not in pics it list
              const picId = uuid();
              const newPicItem = {
                _id: picId,
                blob: square
              };

              contentItemValue = `picId=${picId}`;
              contentList.pics.push(newPicItem);
            }
          } else { // square is not a image
            contentItemValue = square;
          }

          const contentItem: IContentItem = {
            x,
            y,
            xShift,
            yShift,
            value: contentItemValue.toString()
          };

          contentList.items.push(contentItem);
        }
      });
    });
  });

  return contentList;
};


