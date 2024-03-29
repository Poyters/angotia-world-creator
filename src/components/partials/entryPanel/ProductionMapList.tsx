import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_MAP } from "../../../api/angotiaResources/queries/map/getMap";
import { ALL_MAPS_BASE_INFO } from "../../../api/angotiaResources/queries/map/allMapsBaseInfo";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { prepareInternalMapData } from "../../../scripts/parsers/prepareInternalMapData";
import { loadMapData } from "../../../store/actions/mapActions";
import { isValidExternalMapData } from "../../../scripts/validators/isValidExternalMapData";
import { addNotification } from "../../../scripts/utils/notifications";
import { Notification } from "../../../models/notification.model";
import { useTranslation } from "react-i18next";
import routesConfig from "../../../assets/configs/routes.config.json";
import { LoadingSpinner } from "poyters-components";

export const ProductionMapList = () => {
  const map = useQuery(ALL_MAPS_BASE_INFO);
  const dispatch = useDispatch();
  const [getMap, { called, loading }] = useLazyQuery(GET_MAP, {
    onCompleted: data => loadFromDb(data.getMap)
  });
  const { t } = useTranslation(["load", "common"]);
  const history = useHistory();

  if (map.loading || loading) return <LoadingSpinner defaultIcon={true} />;
  if (map.error) return <p> {t("load:map.loadError")} </p>;

  const loadFromDb = loadedData => {
    if (isValidExternalMapData(loadedData)) {
      const internalMapData = prepareInternalMapData(loadedData);
      dispatch(loadMapData(internalMapData));
      history.push(routesConfig.mapCreator);
    } else {
      addNotification(t("load:map.invalidData"), Notification.error);
    }
  };

  const loadChoosedMap = (id: string) => {
    if (called) return;

    getMap({
      variables: { id }
    });
  };

  return (
    <ul className="loadedDataList">
      {map.data?.allMaps.map(mapData => {
        return (
          <li onClick={() => loadChoosedMap(mapData.id)} key={uuid()}>
            <span> {t("common:indernalId")}: </span>
            {mapData._id}
            <span> {t("common:name")}: </span>
            {mapData.map_name}
          </li>
        );
      })}
    </ul>
  );
};
