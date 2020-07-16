import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARS } from '../../../api/queries/allChars';
import { ALL_MAPS } from '../../../api/queries/allMaps';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalCharData } from '../../../assets/scripts/parsers/prepareInternalCharData';
import { prepareInternalMapData } from '../../../assets/scripts/parsers/prepareInternalMapData';
import { drawLoadedMap } from '../../../assets/scripts/drawLoadedMap';
import { loadMapData } from '../../../store/actions/mapActions';


interface IProductionDataList {
  type: string
}

export const ProductionDataList: React.FC<IProductionDataList> = ({ type }) => {
  const { lang, routes } = useContext(ContentContext);
  const char = useQuery(ALL_CHARS);
  const map = useQuery(ALL_MAPS);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (char.loading || map.loading) return <p> Loading... </p>;

  const loadData = (data) => {
    switch (type) {
      case 'char':
        const internalCharData = prepareInternalCharData(data);
        dispatch(loadCharData(internalCharData));
        setRedirect(routes?.char);
      break;
      case 'map':
        const internalMapData = prepareInternalMapData(data);
        dispatch(loadMapData(internalMapData));
        setRedirect(routes?.creator);
        drawLoadedMap();
      break;
    }
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      <ul className="productionDataList">
        { 
          type === 'char' ? (
            char.data?.allChars.map(char => {
              return (
                <li onClick={() => loadData(char)} key={uuid()}> 
                  <span>Internal id:</span>{ char._id }
                  <span>Name:</span>{ char.name }
                  <span>Type:</span>{ char.choosed }
                </li>
              );
            })
          ) : null
        }
        { 
          type === 'map' ? (
            map.data?.allMaps.map(mapData => {
              return (
                <li onClick={() => loadData(mapData)} key={uuid()}> 
                  <span>Internal id:</span>{ mapData._id }
                  <span>Name:</span>{ mapData.map_name }
                </li>
              );
            })
          ) : null
        }
      </ul>
    </>
  );
};