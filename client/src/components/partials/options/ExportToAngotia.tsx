
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';
import { prepareExternalCharData } from '../../../assets/scripts/utils/prepareExternalCharData';
import { CREATE_CHAR } from '../../../api/mutations/chars';
import { useMutation } from '@apollo/react-hooks';


interface IExportToAngotia {
  type?: string,
  text?: string
}

export const ExportToAngotia: React.FC<IExportToAngotia> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const [addChar] = useMutation(CREATE_CHAR);
  const charData = useSelector((state: IStore) => state.char);

  const exportHandler = (): void => {
    switch(type) {
      case 'char':
        const externalCharData = prepareExternalCharData(charData);
        console.log('externalCharData', externalCharData);
        console.log(JSON.stringify(externalCharData));
        addChar({ variables: { char: externalCharData } });
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