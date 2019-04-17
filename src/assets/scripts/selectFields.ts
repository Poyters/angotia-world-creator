import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';


export const selectFieldsHandler = (event: any) => {
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
  const mapSize: any = storeData.map.size;
  let positionDelta: Array<number> = [];


  switch(selectType) {
    case "none": 
      return;
    case "field":
      positionDelta = [
        Math.floor(cursorPosition[0] / fieldSize),
        Math.floor(cursorPosition[1] / fieldSize)
      ];

      selectMatrix[positionDelta[1]][positionDelta[0]] = [
        [1, 1],
        [1, 1]
      ]; //Select whole field
    break;
    case "square":
      positionDelta = [
        Math.floor(cursorPosition[0] / (fieldSize / 2)),
        Math.floor(cursorPosition[1] / (fieldSize / 2))
      ];  
      
      const posField = [
        Math.floor(positionDelta[0] / 2),
        Math.floor(positionDelta[1] / 2)
      ];

      const squareDelta = {
        x: Math.floor(positionDelta[0] % 2),
        y: Math.floor(positionDelta[1] % 2)
      };


      console.log(posField, squareDelta);
      console.log(selectMatrix[posField[1]][posField[0]])
      
      selectMatrix[posField[1]][posField[0]][squareDelta.y][squareDelta.x] = 1;

      console.log(selectMatrix[posField[1]][posField[0]])
      //todo update matrix by square
    break;
    default:
      throw new Error('Invalid select map type.');
  }

  store.dispatch(changeMapSelectMatrix(selectMatrix));

  colorChecked(positionDelta, selectType);
}


const colorChecked = (positionDelta: Array<number>, type: string) => {
  const canvas: any = document.getElementById("mapCanvas");
  const ctx = canvas.getContext("2d");
  let fieldSize: number = creatorConfig.map.fieldSize;

  if (type === 'square') fieldSize = fieldSize / 2;
  
  const posX: number = positionDelta[0] * fieldSize;
  const posY: number = positionDelta[1] * fieldSize;


  ctx.fillRect(posX, posY, fieldSize, fieldSize);
  ctx.closePath();
  ctx.stroke();
}


export const colorBasedOnMatrix = () => {
  const storeData = store.getState();
  const selectMatrix: Array<any> = [...storeData.map.select.matrix];
  const fieldSize: number = creatorConfig.map.fieldSize;
  const canvas: any = document.getElementById("mapCanvas");
  const ctx = canvas.getContext("2d");

  selectMatrix.map((yAxis, y) => {
    yAxis.map((field, x) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.map((square, index) => {
        if (square === 1) {
          const xDelta = index === 1 || index === 3 ?  25 : 0;
          const yDelta = index === 2 || index === 3 ? 25 : 0;
          ctx.fillRect(x*fieldSize + xDelta, y*fieldSize + yDelta, fieldSize / 2 , fieldSize / 2);
          ctx.closePath();
          ctx.stroke();
        }
      });

    })
  })
}