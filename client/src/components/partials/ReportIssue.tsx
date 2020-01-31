import React, { useContext } from 'react';

//Import configs
import appConfig from "../../assets/configs/appConfig.json";

//Import contexts
import { ContentContext } from '../../Template';


const ReportIssue: React.FC = () => {
  const { global } = useContext(ContentContext);

  return (
    <aside 
      className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal"
    >
      <a href={appConfig.reportIssue.link}>
        {global.reportIssue.name}
      </a>
    </aside>
  );
};

export default ReportIssue;