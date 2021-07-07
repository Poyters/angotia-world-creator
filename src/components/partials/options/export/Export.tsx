
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AppModules } from '../../../../models/appModules.model';
import { IApp } from '../../../../interfaces/app.inteface';
import { ExportAlert } from './ExportAlert';
import { ExportMap } from './ExportMap';
import { ExportChar } from './ExportChar';


export const Export = ({ moduleType }: IApp) => {
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [isLicenseAccepted, setIsLicenseAccepted] = useState<boolean>(false);

  const renderSwitch = () => {
    switch (moduleType) {
      case AppModules.char:
        return (
            <ExportChar
              isAccepted={isLicenseAccepted}
              setIsLicenseAccepted={setIsLicenseAccepted}
            />
          );
      case AppModules.map:
        return (
          <ExportMap
            isAccepted={isLicenseAccepted}
            setIsLicenseAccepted={setIsLicenseAccepted}
          />
        );
    }
  };

  return (
    <>
      { isActivePopup && ReactDOM.createPortal(
        <ExportAlert 
          isActivePopup={setIsActivePopup}
          isAccepted={setIsLicenseAccepted}
        />, document.body)
      }
      <span
        onClick={() => setIsActivePopup(true)}
      >
        { renderSwitch() }
      </span>
    </>
  );
};