import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeMonologs } from '../../../../redux/actions/charActions';


//Import interfaces
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';


interface IMonologPopup {
  togglePopup: Function,
  monologData?: IMonolog
}

const MonologPopup: React.FC<IMonologPopup> = ({ togglePopup, monologData }) => {
  const monologId = monologData ? monologData.id : Math.random();
  const [monologContent, setMonologContent] = useState<string>(
    monologData ? monologData.content : '');
  const [monologCtnErr, setMonologCtnErr] = useState<boolean>(false);
  const monologsData: any[] = useSelector(state => state.char.monologs);
  const dispatch: Function = useDispatch();


  useEffect((): void => {
    if (
      monologContent.length === 0 || 
      !monologContent
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
  };

  const editMonolog = (): void => {
    monologsData.filter(monolog => {
      if (monolog.id === monologId) {
        monolog.content = monologContent;
      }
    });

    dispatch(changeMonologs(monologsData));
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
          Add new monolog
        </header>
        <CharInputField
          label='ID - auto generated'
          inputValue={monologId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          Monolog content
        </label>
        <textarea
          value={monologContent} 
          onChange={e => setMonologContent(e.target.value)}
        />
        {
          (monologCtnErr) ? (
            <span className="insertPopup--error">You need to type some content</span>
          ) : null
        }

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={monologCtnErr}
        > 
          submit 
        </button>
      </div>
    </div>
  );
};

export default MonologPopup;