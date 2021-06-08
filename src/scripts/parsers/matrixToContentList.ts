import { deepCopy } from '../utils/deepCopy';
import { IContentList, IContentItem, IContentPic } from '../../interfaces/contentList.interface';
import { findPicBlob } from '../utils/findPicBlob';
import { MapPicData } from '../../models/mapPicData.model';
import { IInternalImageData } from '../../interfaces/images.interface';
import { log } from '../utils/log';


export const matrixToContentList = (matrix: any, internalImages: IInternalImageData[]): IContentList => {
  const contentList: IContentList = {
    items: [],
    pics: []
  };

  if (!matrix || !Array.isArray(matrix)) return contentList;

  log('PARSING_MATRIX_TO_CONTENT_LIST');

  const copyOfmatrix: Array<[]> = deepCopy(matrix);

  copyOfmatrix.forEach((yAxis: Array<number>, y:number) => {
    yAxis.forEach((field: number, x: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.forEach((square: any, index: number) => {
        const xShift: number = index === 1 || index === 3 ?  1 : 0;
        const yShift: number = index === 2 || index === 3 ? 1 : 0;

        // generate contentItem only from not empty matrix squares
        if (square !== 0 && square !== '0') { 
          let contentItemValue: string | number = '';
          // square is a image
          if (square.toString().includes(MapPicData.suffix)) {
            let found = false;
            // Image internal id
            const transformedSquare: string = square.replace(MapPicData.suffix, '');
   
            for (const picItem of contentList.pics) {
              if (picItem._id === transformedSquare) {
                found = true;
              }
            }

            if (!found) {
              const foundBlob = findPicBlob(square, internalImages);

              const newPicItem: IContentPic = {
                _id: transformedSquare,
                blob: foundBlob ? foundBlob : MapPicData.missingBlob
              };

              contentList.pics.push(newPicItem);
            }

            contentItemValue = square;

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
