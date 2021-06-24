
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../../interfaces/store.interface';
import { prepareExternalCharData } from '../../../../scripts/parsers/prepareExternalCharData';
import { CREATE_REQ_CHAR } from '../../../../api/angotiaResources/mutations/char/createReqChar';
import { UPDATE_REQ_CHAR } from '../../../../api/angotiaResources/mutations/char/updateReqChar';
import { GET_REQ_CHAR } from '../../../../api/angotiaResources/queries/char/getReqChar';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { addNotification } from '../../../../scripts/utils/notifications';
import { setCharDatabaseId } from '../../../../store/actions/charActions';
import { Notification } from '../../../../models/notification.model';
import { useTranslation } from 'react-i18next';


interface IExportChar {
  isAccepted: boolean
}

export const ExportChar = ({ isAccepted }: IExportChar) => {
  const { t } = useTranslation(['save']);
  const dispatch = useDispatch();
  const [updateChar] = useMutation(UPDATE_REQ_CHAR);
  const charData = useSelector((state: IStore) => state.char);
  const charErrors = useSelector((state: IStore) => state.ui.charCreationErrors);
  const [addChar] = useMutation(CREATE_REQ_CHAR, {
    onCompleted({ createRequestedChar }) { // add database id to states
      dispatch(setCharDatabaseId(createRequestedChar.id));
    }
  });
  const char = useQuery(GET_REQ_CHAR, {
    variables: { id: charData.id },
    skip: !charData.id
  });

  useEffect(() => {
    if (!isAccepted) return;

    exportHandler();
  }, [isAccepted]);

  const exportHandler = async () => {
    const externalCharData = prepareExternalCharData(charData);

    if (char.error) {
      addNotification(t('save:char.exportError'),
        Notification.error
      );
      return;
    } else if (charErrors.length > 0) {
      addNotification(t('save:char.protectErrors'), Notification.error);
      return;
    }

    if (char.data) { // Char already exists id database
      delete externalCharData._id;
      updateChar({ variables: { id: charData.id, ...externalCharData } });
      addNotification(t('save:char.exportUpdate'));
    } else { // Char doest't exists
      addChar({ variables: { ...externalCharData } });
      addNotification(t('save:char.exportAdd'));
    }
  };

  return (
    <span>
      { t('save:exportTitle') }  
    </span>
  );
};