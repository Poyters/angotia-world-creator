import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { SelectType } from '../../models/selectType.model';


export const dragElement = element => {
  const positions: Array<number> = [0, 0, 0, 0];
  
  const dragMouseDown = (e: MouseEvent) => {
    e.preventDefault();

    positions[2] = e.clientX;
    positions[3] = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent) => {
    const storeData: IStore = store.getState();
    const selectType = storeData.ui.select.type;

    if (selectType === SelectType.mouse) return;
    
    e.preventDefault();

    positions[0] = positions[2] - e.clientX;
    positions[1] = positions[3] - e.clientY;
    positions[2] = e.clientX;
    positions[3] = e.clientY;

    element.style.top = (element.offsetTop - positions[1]) + 'px';
    element.style.left = (element.offsetLeft - positions[0]) + 'px';
  };

  const closeDragElement = () => {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  };

  element.onmousedown = dragMouseDown;
};