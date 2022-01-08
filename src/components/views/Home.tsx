import React, { useEffect } from "react";
import { SectionHeader } from "../partials/SectionHeader";
import { EntryPanel } from "../partials/entryPanel/EntryPanel";
import { LangMenu } from "../partials/LangMenu";
import { forceGetUserId } from "../../scripts/user/forceGetUserId";
import { CreditsFooter } from "poyters-components";

export const Home: React.FC = () => {
  useEffect(() => {
    // Generate a userId if does not exist
    forceGetUserId();
  }, []);

  return (
    <div role="presentation" className="g-container g-container--borders">
      <SectionHeader headerTxt="Angotia World Creator" />
      <div role="presentation" className="g-wrapper">
        <EntryPanel />
      </div>
      <CreditsFooter
        startedYear={2018}
        author="Poyters"
        absolute={true}
        url="https://poyters.pl"
      />
      <LangMenu />
    </div>
  );
};
