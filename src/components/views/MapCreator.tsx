import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatorPanel } from '../partials/creatorPanel/CreatorPanel';
import { FilesPanel } from '../partials/filesPanel/FilesPanel';
import { CreditsFooter } from '../partials/CreditsFooter';
import { Map } from '../partials/Map';
import { Notifications } from '../partials/Notifications';
import { VersionMark } from '../partials/VersionMark';
import { ReportIssue } from '../partials/ReportIssue';
import { MapSettingsPanel } from '../partials/MapSettingsPanel';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';
import { generateEmptyMatrix } from '../../scripts/matrix/generateEmptyMatrix';
import { deepCopy } from '../../scripts/utils/deepCopy';
import { drawLoadedMap } from '../../scripts/draw/drawLoadedMap';
import { ErrorPanel } from '../partials/errorPanel/ErrorPanel';
import { findMapErrors } from '../../scripts/errorSystem/findMapErrors';
import { IStore } from '../../interfaces/store.interface';
import { IMapState } from '../../interfaces/mapState.interface';
import { ErrorMark } from '../partials/errorPanel/ErrorMark';
import { AppModules } from '../../models/appModules.model';


export const MapCreator: React.FC = () => {
  const dispatch = useDispatch();
  const mapState: IMapState = useSelector((state: IStore) => state.map);
  
  useEffect((): void => { //Create necessary empty matrix at the beginning
    const newEmptyMatrix = generateEmptyMatrix();

    dispatch(changeMapSelectMatrix(deepCopy(newEmptyMatrix)));
    drawLoadedMap();
    
  }, [dispatch]);

  useEffect(() => {
    findMapErrors();
  }, [mapState]);

  return (
    <article className="creatorWrapper">
      <CreatorPanel />
      <FilesPanel />
      <MapSettingsPanel />
      <Map />
      <CreditsFooter />
      <ErrorPanel moduleType={AppModules.map} />
      <Notifications />
      <VersionMark />
      <ReportIssue />
      <ErrorMark />
    </article>
  );
};