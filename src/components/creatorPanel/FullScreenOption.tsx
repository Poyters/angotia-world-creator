import React, { useState } from 'react';

const runFullScreen = element => {
	if(element.requestFullscreen)
		element.requestFullscreen();
}

const closeFullScreen = () => {
  if(document.exitFullscreen)
		document.exitFullscreen();
}


const FullScreenOption: React.SFC = () => {
  const [ fs, setFs ] = useState(false);
  const body = document.getElementsByTagName('body');

  const clickHandler = () => {
    if (fs) {
      closeFullScreen();
      setFs(false);
    }
    else {
      runFullScreen(body[0]);
      setFs(true);
    }
  }

  const fsOnOff = fs ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option option--fullScreen ${fsOnOff}`} onClick={clickHandler}>
        
    </div>
  );
}


export default FullScreenOption;