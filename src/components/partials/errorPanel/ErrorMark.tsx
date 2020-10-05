import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { toggleErrorPanel } from '../../../store/actions/uiActions';


export const ErrorMark: React.FC = () => {
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const dispatch = useDispatch();

  return (
    <>
      {
        mapErrors.length > 0 ? (
          <aside 
            className="errorMark"
            onClick={(): void => dispatch(toggleErrorPanel(true))}
          >
            <div className="errorMark__count"> 
              <span> ! </span>
            </div>
            <div className="errorMark__message"> 
              <span> 
                { mapErrors.length }
                { mapErrors.length > 1 ? ' errors' : ' error'} 
              </span>
            </div>
          </aside>
        ) : null
      }
    </>
  );
};