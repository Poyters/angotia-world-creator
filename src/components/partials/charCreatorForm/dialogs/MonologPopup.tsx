import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { ActionInputField } from '../../ActionInputField';
import { changeMonologs } from '../../../../store/actions/charActions';
import { IMonolog } from '../../../../interfaces/dialogs.interface';
import { ContentContext } from '../../../../Template';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IMonologPopup } from '../../../../interfaces/dialogs.interface';


export const MonologPopup: React.FC<IMonologPopup> = (
  { isActivePopup, monologData, setMonologData }
) => {
  const { char, notifications } = useContext(ContentContext);
  const monologId: string = monologData ? monologData.id : uuid();
  const [monologContent, setMonologContent] = useState<string>(monologData?.content || '');
  const [monologCtnErr, setMonologCtnErr] = useState<boolean>(false);
  const monologsData: IMonolog[] = useSelector((state: IStore) => state.char.monologs);
  const dispatch: Function = useDispatch();


  useEffect((): void => {
    if (
      !monologContent ||
      monologContent.length === 0
    ) {
      setMonologCtnErr(true);
    }
    else setMonologCtnErr(false);
  }, [monologContent]);

  useEffect(() => {
    const keyPressHandler = (event): void => {
        if (event.key === 'Escape') isActivePopup(false);
        else if (event.key === 'Enter') submitHandler();
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
        document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const insertMonolog = (): void => {
    monologsData.push({
      id: monologId,
      content: monologContent
    });

    dispatch(changeMonologs(monologsData));
    addNotification(notifications?.monologs?.add);
  };

  const editMonolog = (): void => {
    monologsData.forEach(monolog => {
      if (monolog.id === monologId) {
        monolog.content = monologContent;
      }
    });

    dispatch(changeMonologs(monologsData));
    addNotification(notifications?.monologs?.edit);
    if (setMonologData) setMonologData(null);
  };

  const submitHandler = (): void => {
    if (monologCtnErr) return;
    
    if (
      monologData &&
      monologData.id && 
      monologData.content
    ) { // edit mode
      editMonolog();
    } else { // insert mode
      insertMonolog();
    }

    isActivePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { char?.monolog?.add }
        </header>
        <ActionInputField
          label='ID - auto generated'
          inputValue={monologId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { char?.monolog?.content }
        </label>
        <textarea
          value={monologContent} 
          onChange={e => setMonologContent(e.target.value)}
        />
        {
          (monologCtnErr) ? (
            <span className="insertPopup--error">
              { char?.monolog?.contentErr }
            </span>
          ) : null
        }

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={submitHandler} 
          disabled={monologCtnErr}
        > 
          { char?.monolog?.submit } 
        </button>
      </div>
    </div>
  );
};