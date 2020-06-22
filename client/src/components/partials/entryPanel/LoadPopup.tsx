import React, { useState, useEffect, useContext} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { loadCharData } from '../../../store/actions/charActions';
import { drawLoadedMap } from '../../../assets/scripts/drawLoadedMap';
import { loadMapData } from '../../../store/actions/mapActions';
import { ContentContext } from '../../../Template';
import { addNotification } from '../../../assets/scripts/notifications';
import { useQuery } from '@apollo/react-hooks';
import { NPCS_PRESENTATION_LIST } from '../../../api/queries/npcs';


interface ILoadPopup {
  isActive: Function,
  type: string
}

export const LoadPopup: React.FC<ILoadPopup> = ({ isActive, type }) => {
  const { lang, routes } = useContext(ContentContext);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<null | string>(null);
  const [npcPresenationList, setNpcPresentationList] = useState<any>(null);
  const { loading, error, data } = useQuery(NPCS_PRESENTATION_LIST);
  

  useEffect(() => {
    console.log('xd');
    const npcListDom = data?.allNpcs?.map(npc => {
      return <li> { npc.name }, { npc._id} </li>;
    });

    setNpcPresentationList(npcListDom);
  }, [data]);

  useEffect(() => {
    const keyPressHandler = (event): void => {
      if (event.key === 'Escape') isActive(false);
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const load = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return (e) => {
        const loadedData = JSON.parse(e.target.result);

        switch (type) {
          case 'map':
            dispatch(loadMapData(loadedData));
            setRedirect(routes?.creator);
            drawLoadedMap();
          break;
          case 'char':
            dispatch(loadCharData(loadedData));
            setRedirect(routes?.char);
          break;
          default:
            addNotification('Unknown loaded data type', 'warning');
        }
      };

    })();

    reader.readAsText(file);
  };

  const content = redirect !== null ? (
    <Redirect to={`/${lang}/${redirect}`}/>
  ) : (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={(): void => isActive(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Load from
        </header>
        <section className="popupChooseBoxes">
          <div className="popupChooseBoxes__box">
            production database
          </div>
          <ul>
            { npcPresenationList }
          </ul>
          <div className="popupChooseBoxes__box">
            private account
          </div>
          <input 
            type="file" 
            id="loadInput" 
            className="g-hidenFileInput"
            onChange={(event): void => load(event)}
          /> 
          <label 
            className="popupChooseBoxes__box"
            htmlFor="loadInput"
          >
            json
          </label>
        </section>
      </div>
    </div>
  );

  return (
    content
  );
};