
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


interface IExportToAngotia {
  type?: string,
  text?: string
}

export const ExportToAngotia: React.FC<IExportToAngotia> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const [addChar] = useMutation(CREATE_CHAR);
  const [updateChar] = useMutation(UPDATE_CHAR);
  const charData = useSelector((state: IStore) => state.char);
  console.log('charData.id', charData.id);
  const { loading, error, data } = useQuery(GET_CHAR, {
    variables: { id: charData.id},
    skip: !charData.id
  });

  const exportHandler = (): void => {
    switch(type) {
      case 'char':
        const externalCharData = prepareExternalCharData(charData);

        if (data) { // Char already exists id database
          delete externalCharData._id;
          console.log('externalCharData', JSON.stringify(externalCharData));
          updateChar({ variables: { id: charData.id, char: externalCharData}});
        } else { // char doest't exists
          addChar({ variables: { ...externalCharData }});
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