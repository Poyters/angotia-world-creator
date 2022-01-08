import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CharPanel } from "../partials/charPanel/CharPanel";
import { CreditsFooter } from "poyters-components";
import { VersionMark } from "../partials/VersionMark";
import { ReportIssue } from "../partials/ReportIssue";
import { CharCreatorForm } from "../partials/char/CharCreatorForm";
import { StatisticPanel } from "../partials/char/StatisticPanel";
import { SettingsPanel } from "../partials/char/SettingsPanel";
import { ErrorMark } from "../partials/errorPanel/ErrorMark";
import { AppModules } from "../../models/appModules.model";
import { ErrorPanel } from "../partials/errorPanel/ErrorPanel";
import { findCharErrors } from "../../scripts/errorSystem/findCharErrors";
import { IStore } from "../../interfaces/store.interface";
import { ICharState } from "../../interfaces/charState.interface";

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
      <SettingsPanel />
      <CreditsFooter
        startedYear={2018}
        author="Poyters"
        absolute={true}
        url="https://poyters.pl"
      />
      <VersionMark />
      <ReportIssue />
      <ErrorPanel moduleType={AppModules.char} />
      <ErrorMark moduleType={AppModules.char} />
    </article>
  );
};
