import React from 'react';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';


const VersionMark: React.FC = () => {
  return (
    <aside className="labelMark t-paragraph5Normal">
      {appConfig.version.phase} {appConfig.version.number}
    </aside>
  );
};

export default VersionMark;