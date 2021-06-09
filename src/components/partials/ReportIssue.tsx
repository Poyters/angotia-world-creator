import React from 'react';
import appConfig from '../../assets/configs/app.config.json';


export const ReportIssue: React.FC = () => {
  return (
    <aside 
      className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal"
    >
      <a href={appConfig?.reportIssue?.link}>
        Report issue
      </a>
    </aside>
  );
};