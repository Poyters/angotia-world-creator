import React, { useContext } from 'react';
import appConfig from "../../assets/configs/app.config.json";
import { ContentContext } from '../../Template';


export const ReportIssue: React.FC = () => {
  const { global } = useContext(ContentContext);

  return (
    <aside 
      className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal"
    >
      <a href={appConfig?.reportIssue?.link}>
        {global?.reportIssue?.name}
      </a>
    </aside>
  );
};