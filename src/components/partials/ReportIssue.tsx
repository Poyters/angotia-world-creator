import React from 'react';
import appConfig from '../../assets/configs/app.config.json';
import { useTranslation } from 'react-i18next';


export const ReportIssue: React.FC = () => {
  const { t } = useTranslation(['common']);

  return (
    <aside 
      className="labelMark labelMark--bottomLeft labelMark--link t-paragraph5Normal"
    >
      <a href={appConfig?.reportIssue?.link}>
        { t('common:reportIssue') }
      </a>
    </aside>
  );
};