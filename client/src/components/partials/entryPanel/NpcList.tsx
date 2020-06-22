import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NPCS_PRESENTATION_LIST } from '../../../api/queries/npcs';


export const NpcList: React.FC = () => {
  const { loading, error, data } = useQuery(NPCS_PRESENTATION_LIST);

  if (loading) return <p>Loading</p>;
  if (error) return <p> Error { error } </p>;

  return (
    <ul>
      { 
        data?.allNpcs.map(npc => {
          return (
            <li> 
              { npc.name }
            </li>
          );
        })
      }
    </ul>
  );
};