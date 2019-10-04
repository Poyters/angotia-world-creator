import { store } from '../../App';


const dragElement = (element:any) => {
  let positions:Array<number> = [0, 0, 0, 0];
  
  const dragMouseDown = (e: MouseEvent): void => {
    e.preventDefault();

    positions[2] = e.clientX;
    positions[3] = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent): void => {
    const storeData = store.getState();
    const selectType = storeData.map.select.type;

    if (selectType === 'mouse') return;
    
    e.preventDefault();

    positions[0] = positions[2] - e.clientX;
    positions[1] = positions[3] - e.clientY;
    positions[2] = e.clientX;
    positions[3] = e.clientY;

    element.style.top = (element.offsetTop - positions[1]) + "px";
    element.style.left = (element.offsetLeft - positions[0]) + "px";
  };

  const closeDragElement = (): void => {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  };

  element.onmousedown = dragMouseDown;
};

export default dragElement;