import React from 'react';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';


const VersionMark: React.FC = () => {
  return (
    <aside className="labelMark t-paragraph5Normal">
      {creatorConfig.version}
    </aside>
  );
};

export default VersionMark;