import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NPCS_PRESENTATION_LIST } from '../../../api/queries/npcs';


export const ProductionDataList: React.FC = () => {
  const { loading, error, data } = useQuery(NPCS_PRESENTATION_LIST);

  if (loading) return <p> Loading </p>;
  if (error) return <p> Error { error } </p>;

  return (
    <ul className="productionDataList">
      { 
        data?.allNpcs.map(npc => {
          return (
            <li> 
              <span>Name:</span>{ npc.name }
              <span>Id:</span>{ npc.id }
              <span>_Id:</span>{ npc._id }
            </li>
          );
        })
      }
    </ul>
  );
};