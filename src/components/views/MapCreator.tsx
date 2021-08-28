import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatorPanel } from '../partials/map/creatorPanel/CreatorPanel';
import { FilesPanel } from '../partials/map/filesPanel/FilesPanel';
import { CreditsFooter } from '../partials/CreditsFooter';
import { Map } from '../partials/map/Map';
import { VersionMark } from '../partials/VersionMark';
import { ReportIssue } from '../partials/ReportIssue';
import { MapSettingsPanel } from '../partials/map/MapSettingsPanel';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';
import { generateEmptyMatrix } from '../../scripts/matrix/generateEmptyMatrix';
import { deepCopy } from '../../scripts/utils/deepCopy';
import { drawLoadedMap } from '../../scripts/draw/drawLoadedMap';
import { findMapErrors } from '../../scripts/errorSystem/findMapErrors';
import { IStore } from '../../interfaces/store.interface';
import { IMapState } from '../../interfaces/mapState.interface';
import { ErrorMark } from '../partials/errorPanel/ErrorMark';
import { AppModules } from '../../models/appModules.model';
import { ErrorPanel } from '../partials/errorPanel/ErrorPanel';
import { LoadingSpinner, Size } from 'poyters-components';


export const MapCreator: React.FC = () => {
  const dispatch = useDispatch();
  const mapState: IMapState = useSelector((state: IStore) => state.map);
  const [loadingMap, setLoadingMap] = useState(true);
  
  useEffect(() => { // Create necessary empty matrix at the beginning
    const newEmptyMatrix = generateEmptyMatrix();

    dispatch(changeMapSelectMatrix(deepCopy(newEmptyMatrix)));
    drawLoadedMap();
    
  }, [dispatch]);

  useEffect(() => {
    findMapErrors();
    setLoadingMap(false);
  }, [mapState]);

  return (
    <article className="creatorWrapper">
      {
        loadingMap ? <LoadingSpinner defaultIcon={true} fullPage={true} size={Size.large} /> : null
      }
      <CreatorPanel />
      <FilesPanel />
      <MapSettingsPanel />
      <Map />
      <CreditsFooter />
      <VersionMark />
      <ReportIssue />
      <ErrorPanel moduleType={AppModules.map} />
      <ErrorMark moduleType={AppModules.map} />
    </article>
  );
};