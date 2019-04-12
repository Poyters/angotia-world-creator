import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';


export const selectFieldsHandler = (event: MouseEvent) => {
  const map: any = document.getElementById("map");
  let mapLeft: number = parseInt(map.style.left);
  let mapTop: number = parseInt(map.style.top);

  if (isNaN(mapLeft)) mapLeft = 0;
  if (isNaN(mapTop)) mapTop = 0;

  const cursorPosition: Array<number> = [
    event.clientX - mapLeft, 
    event.clientY - mapTop
  ];

  selectField(cursorPosition);
}


const selectField = (cursorPosition: Array<number>) => {
  const storeData = store.getState();
  const selectMatrix: Array<number> = [...storeData.map.select.matrix];
  const selectType: string = storeData.map.select.type;
  const fieldSize: number = creatorConfig.map.fieldSize;
  let positionDelta: Array<number> = [];


  switch(selectType) {
    case "none": 
      return;
    case "square":
      positionDelta = [
        Math.floor(cursorPosition[0] / fieldSize),
        Math.floor(cursorPosition[1] / fieldSize)
      ];

      selectMatrix[positionDelta[1]][positionDelta[0]] = [
        [1, 1],
        [1, 1]
      ]; //Select whole square
    break;
    case "field":
      positionDelta = [
        Math.floor(cursorPosition[0] / (fieldSize / 2)),
        Math.floor(cursorPosition[1] / (fieldSize / 2))
      ];  
    break;
    default:
      throw new Error('Invalid select map type.');
  }

  store.dispatch(changeMapSelectMatrix(selectMatrix));

  colorChecked(positionDelta, selectType);
}


const colorChecked = (positionDelta: Array<number>, type: string) => {
  const storeData = store.getState();
  const selectMatrix = [...storeData.map.select.matrix];

  
  
  console.log(positionDelta);

}