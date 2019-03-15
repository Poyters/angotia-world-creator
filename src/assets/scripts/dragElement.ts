const dragElement = (element:any) => {
    let positions:Array<number> = [0, 0, 0, 0];
    
    element.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      positions[2] = e.clientX;
      positions[3] = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      positions[0] = positions[2] - e.clientX;
      positions[1] = positions[3] - e.clientY;
      positions[2] = e.clientX;
      positions[3] = e.clientY;
      // set the element's new position:
      element.style.top = (element.offsetTop - positions[1]) + "px";
      element.style.left = (element.offsetLeft - positions[0]) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

export default dragElement;