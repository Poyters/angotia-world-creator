import React, { useState } from 'react';


const runFullScreen = (): void => {
  if (isFullScreen()) return;

	if (document.body.requestFullscreen)
		document.body.requestFullscreen();
};

const closeFullScreen = (): void => {
  if (!isFullScreen()) return;

  if (document.exitFullscreen) document.exitFullscreen();
};

const isFullScreen = (): boolean => {
  if (
    window.innerHeight === screen.height
  ) {
    return true;
  } 

  return false;
};


const FullScreenOption: React.FC = () => {
  const [fs, setFs] = useState<boolean>(false);
  document.addEventListener('keydown', event => externalFSChange(event.key));

  const clickHandler = (): void => {
    if (fs) {
      closeFullScreen();
      setFs(false);
    }
    else {
      runFullScreen();
      setFs(true);
    }
  };

  const externalFSChange = (key: string): void => {
    if (key === 'F11') setFs(!fs);
  };

  const fsOnOff: string = fs ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option option--fullScreen ${fsOnOff}`} onClick={clickHandler}>
      <div className="titleContainer" data-title="turn on/off full screen mode"></div>
    </div>
  );
};


export default FullScreenOption;