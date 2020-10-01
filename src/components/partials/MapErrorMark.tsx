import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../interfaces/store.interface';
import { toggleErrorPanel } from '../../store/actions/uiActions';


export const MapErrorMark: React.FC = () => {
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const dispatch = useDispatch();

  return (
    <>
      {
        mapErrors.length > 0 ? (
          <aside 
            className="mapErrorMark"
            onClick={(): void => dispatch(toggleErrorPanel(true))}
          >
            <div className="mapErrorMark__count"> 
              <span> ! </span>
            </div>
            <div className="mapErrorMark__message"> 
              <span> { mapErrors.length } errors </span>
            </div>
          </aside>
        ) : null
      }
    </>
  );
};