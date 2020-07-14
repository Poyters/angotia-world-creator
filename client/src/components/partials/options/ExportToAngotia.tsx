
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';
import { prepareExternalCharData } from '../../../assets/scripts/utils/prepareExternalCharData';
import { CREATE_CHAR } from '../../../api/mutations/createChar';
import { UPDATE_CHAR } from '../../../api/mutations/updateChar';
import { GET_CHAR } from '../../../api/queries/getChar';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { addNotification } from '../../../assets/scripts/notifications';


interface IExportToAngotia {
  type?: string,
  text?: string
}

export const ExportToAngotia: React.FC<IExportToAngotia> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const [addChar] = useMutation(CREATE_CHAR);
  const [updateChar] = useMutation(UPDATE_CHAR);
  const charData = useSelector((state: IStore) => state.char);
  const mapData = useSelector((state: IStore) => state.map);
  const char = useQuery(GET_CHAR, {
    variables: { id: charData.id},
    skip: !charData.id
  });
  const map = useQuery(GET_MAP, {
    variables: { id: mapData.id},
    skip: !charData.id
  });

  const exportHandler = (): void => {
    switch(type) {
      case 'char':
        const externalCharData = prepareExternalCharData(charData);

        if (char.error) {
          addNotification(`Expected error during checking existing char: ${char.error}`, 'warning');
        }

        if (char.data) { // Char already exists id database
          delete externalCharData._id;
          updateChar({ variables: { id: charData.id, ...externalCharData}});
          addNotification('Succesfully updated character');
        } else { // char doest't exists
          addChar({ variables: { ...externalCharData }});
          addNotification('Succesfully added a new character to Angotia');
        }  
      break;
      case 'char':
        const externalMapData = prepareExternalCharData(charData);

        if (map.error) {
          addNotification(`Expected error during checking existing map: ${map.error}`, 'warning');
        }

        if (map.data) { // Char already exists id database
          delete externalMapData._id;
          updateChar({ variables: { id: charData.id, ...externalMapData}});
          addNotification('Succesfully updated map');
        } else { // char doest't exists
          addChar({ variables: { ...externalMapData }});
          addNotification('Succesfully added a new map to Angotia');
        }  
      break;
    }
  };

  return (
    <span
      onClick={(): void => exportHandler()}
    > 
      {text ? text : creator?.panel?.options?.save?.content}  
    </span>
  );
};