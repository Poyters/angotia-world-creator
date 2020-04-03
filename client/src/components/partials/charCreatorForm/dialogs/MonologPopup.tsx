import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import ActionInputField from '../../ActionInputField';
import { changeMonologs } from '../../../../redux/actions/charActions';
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';
import { ContentContext } from '../../../../Template';
import { setActionNote } from '../../../../assets/scripts/notifications';


interface IMonologPopup {
  togglePopup: Function,
  monologData?: IMonolog,
  setMonologData?: Function
}

const MonologPopup: React.FC<IMonologPopup> = (
  { togglePopup, monologData, setMonologData }
) => {
  const { char, notifications } = useContext(ContentContext);
  const monologId: string = monologData ? monologData.id : uuid();
  const [monologContent, setMonologContent] = useState<string>(
    monologData ? monologData.content : '');
  const [monologCtnErr, setMonologCtnErr] = useState<boolean>(false);
  const monologsData: IMonolog[] = useSelector(state => state.char.monologs);
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

  const insertMonolog = (): void => {
    monologsData.push({
      id: monologId,
      content: monologContent
    });

    dispatch(changeMonologs(monologsData));
    setActionNote(notifications.monologs.add);
  };

  const editMonolog = (): void => {
    monologsData.filter(monolog => {
      if (monolog.id === monologId) {
        monolog.content = monologContent;
      }
    });

    dispatch(changeMonologs(monologsData));
    setActionNote(notifications.monologs.edit);
    if (setMonologData) setMonologData(null);
  };

  const submitHandler = (): void => {
    if (
      monologData &&
      monologData.id && 
      monologData.content
    ) { // edit mode
      editMonolog();
    } else { // insert mode
      insertMonolog();
    }

    togglePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => togglePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { char.monolog.add }
        </header>
        <ActionInputField
          label='ID - auto generated'
          inputValue={monologId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { char.monolog.content }
        </label>
        <textarea
          value={monologContent} 
          onChange={e => setMonologContent(e.target.value)}
        />
        {
          (monologCtnErr) ? (
            <span className="insertPopup--error">
              { char.monolog.contentErr }
            </span>
          ) : null
        }

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={monologCtnErr}
        > 
          { char.monolog.submit } 
        </button>
      </div>
    </div>
  );
};

export default MonologPopup;