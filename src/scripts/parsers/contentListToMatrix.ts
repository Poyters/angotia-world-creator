import { IContentList } from "../../interfaces/contentList.interface";
import { IMapSize } from "../../interfaces/map.interface";
import { generateEmptyMatrix } from "../matrix/generateEmptyMatrix";
import { MapPicData } from "../../models/mapPicData.model";
import { log } from "../utils/log";

export const contentListToMatrix = (
  contentList: IContentList,
  matrixSize: IMapSize
): any[] | null => {
  if (!contentList) return null;

  log("PARSING_CONTENT_LIST_TO_MATRIX", {
    contentListItems: contentList?.items?.length ?? 0,
    contentListPics: contentList?.pics?.length ?? 0
  });

  const emptyMatrix = generateEmptyMatrix(matrixSize);

  if (contentList.items.length === 0) return emptyMatrix;

  for (const contentItem of contentList.items) {
    if (contentItem.value.toString().includes(MapPicData.suffix)) {
      const picId: string = contentItem.value
        .toString()
        .replace(MapPicData.suffix, "");

      for (const picItem of contentList.pics) {
        if (picItem.id === picId) {
          // eslint-disable-next-line max-len
          emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][
            contentItem.xShift
          ] = contentItem.value;
        }
      }
    } else {
      // eslint-disable-next-line max-len
      emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][
        contentItem.xShift
      ] = contentItem.value;
    }
  }

  log("PARSED_CONTENT_LIST_TO_MATRIX");

  return emptyMatrix;
};
