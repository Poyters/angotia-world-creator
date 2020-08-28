import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CreatorPanel } from '../partials/creatorPanel/CreatorPanel';
import { FilesPanel } from '../partials/filesPanel/FilesPanel';
import { CreditsFooter } from '../partials/CreditsFooter';
import { Map } from '../partials/Map';
import { Notifications } from '../partials/Notifications';
import { VersionMark } from '../partials/VersionMark';
import { ReportIssue } from '../partials/ReportIssue';
import { MapSettingsPanel } from '../partials/MapSettingsPanel';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';
import { generateEmptyMapMatrix } from '../../assets/scripts/map';
import { deepCopy } from '../../assets/scripts/utils/deepCopy';
import { drawLoadedMap } from '../../assets/scripts/drawLoadedMap';


export const MapCreator: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect((): void => { //Create necessary empty matrix at the beginning
    const newEmptyMatrix = generateEmptyMapMatrix();

    dispatch(changeMapSelectMatrix(deepCopy(newEmptyMatrix)));
    drawLoadedMap();
  }, [dispatch]);

  return (
    <article className="creatorWrapper">
      <CreatorPanel />
      <FilesPanel />
      <MapSettingsPanel />
      <Map />
      <CreditsFooter />
      <Notifications />
      <VersionMark />
      <ReportIssue />
    </article>
  );
};