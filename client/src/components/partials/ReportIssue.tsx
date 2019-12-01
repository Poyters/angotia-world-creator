import React from 'react';

//Import configs
import appConfig from "../../assets/configs/appConfig.json";

//Import contexts
import { ContentContext } from '../../Template';


const ReportIssue: React.FC = () => {
  return (
    <ContentContext.Consumer>
      {({ global }) => (
        <aside 
          className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal"
        >
          <a href={appConfig.reportIssue.link}>
            {global.reportIssue.name}
          </a>
        </aside>
      )}
    </ContentContext.Consumer>
  );
};

export default ReportIssue;