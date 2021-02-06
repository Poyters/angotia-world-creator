import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CharPanel } from '../partials/charPanel/CharPanel';
import { CreditsFooter } from '../partials/CreditsFooter';
import { Notifications } from '../partials/Notifications';
import { VersionMark } from '../partials/VersionMark';
import { ReportIssue } from '../partials/ReportIssue';
import { CharCreatorForm } from '../partials/charCreator/CharCreatorForm';
import { StatisticPanel } from '../partials/charCreator/StatisticPanel';
import { CharSettingsPanel } from '../partials/charCreator/CharSettingsPanel';
import { ErrorMark } from '../partials/errorPanel/ErrorMark';
import { AppModules } from '../../models/appModules.model';
import { ErrorPanel } from '../partials/errorPanel/ErrorPanel';
import { findCharErrors } from '../../scripts/errorSystem/findCharErrors';
import { IStore } from '../../interfaces/store.interface';
import { ICharState } from '../../interfaces/charState.interface';


export const CharCreator: React.FC = () => {
  const charState: ICharState = useSelector((state: IStore) => state.char);

  useEffect(() => {
    findCharErrors();
  }, [charState]);

  return (
    <article className="creatorWrapper">
      <CharPanel />
      <CharCreatorForm />
      <StatisticPanel />
      <CharSettingsPanel />
      <CreditsFooter />
      <Notifications />
      <VersionMark />
      <ReportIssue />
      <ErrorPanel moduleType={AppModules.char} />
      <ErrorMark moduleType={AppModules.char} />
    </article>
  );
};