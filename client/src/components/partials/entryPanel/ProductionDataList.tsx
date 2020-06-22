import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_NPCS } from '../../../api/queries/npcs';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalCharData } from '../../../assets/scripts/utils/prepareInternalCharData';


export const ProductionDataList: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const { loading, error, data } = useQuery(ALL_NPCS);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error { error } </p>;

  const loadData = (data) => {
    const internalData = prepareInternalCharData(data);
    console.log('internalData', internalData);
    dispatch(loadCharData(internalData));
    setRedirect(routes?.char);
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
          data?.allNpcs.map(npc => {
            return (
              <li onClick={() => loadData(npc)} key={uuid()}> 
                <span>Name:</span>{ npc.name }
                <span>Id:</span>{ npc.id }
                <span>_Id:</span>{ npc._id }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};