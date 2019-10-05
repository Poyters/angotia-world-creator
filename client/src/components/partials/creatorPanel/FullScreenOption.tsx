import React, { useState } from 'react';


const runFullScreen = (element: HTMLElement): void => {
  if (isFullScreen()) return;

	if (element.requestFullscreen)
		element.requestFullscreen();
};

const closeFullScreen = (): void => {
  if (!isFullScreen()) return;

  if (document.exitFullscreen) document.exitFullscreen();
};

const isFullScreen = (): boolean => {
  if (
    window.innerWidth === screen.width && 
    window.innerHeight === screen.height
  ) {
    return true;
  } 

  return false;
};


const FullScreenOption: React.FC = () => {
  const [fs, setFs] = useState<boolean>(false);
  const body: HTMLElement = document.getElementsByTagName('body')[0];
  document.addEventListener('keydown', event => externalFSChange(event.key));

  const clickHandler = (): void => {
    if (fs) {
      closeFullScreen();
      setFs(false);
    }
    else {
      runFullScreen(body);
      setFs(true);
    }
  };

  const externalFSChange = (key: string): void => {
    if (key === 'F11') setFs(!fs);
    console.log(key)
  }

  const fsOnOff: string = fs ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option option--fullScreen ${fsOnOff}`} onClick={clickHandler}>
      <div className="titleContainer" data-title="turn on/off full screen mode"></div>
    </div>
  );
};


export default FullScreenOption;