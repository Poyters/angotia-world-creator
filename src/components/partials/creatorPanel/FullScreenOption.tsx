import React, { useState } from 'react';


const runFullScreen = (element: HTMLElement): void => {
	if (element.requestFullscreen)
		element.requestFullscreen();
}

const closeFullScreen = (): void => {
  if (document.exitFullscreen)
		document.exitFullscreen();
}


const FullScreenOption: React.FC = () => {
  const [fs, setFs] = useState<boolean>(false);
  const body: HTMLElement = document.getElementsByTagName('body')[0];

  const clickHandler = (): void => {
    if (fs) {
      closeFullScreen();
      setFs(false);
    }
    else {
      runFullScreen(body);
      setFs(true);
    }
  }

  const fsOnOff: string = fs ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option option--fullScreen ${fsOnOff}`} onClick={clickHandler}>
      <div className="titleContainer" data-title="turn on/off full screen mode"></div>
    </div>
  );
}


export default FullScreenOption;