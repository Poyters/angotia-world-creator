import React from 'react';

//Import configs
import appConfig from "../../assets/configs/appConfig.json";

const ReportIssue: React.FC = () => {
  return (
    <aside className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal">
      <a href={appConfig.reportIssue.link}>
        {appConfig.reportIssue.name}
      </a>
    </aside>
  );
};

export default ReportIssue;