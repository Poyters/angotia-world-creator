import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { toggleErrorPanel } from '../../../store/actions/uiActions';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';


export const ErrorMark: React.FC<IApp> = ({ moduleType }) => {
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const dispatch = useDispatch();

  return (
    <>
      {
        (moduleType === AppModules.map && mapErrors.length > 0) ||
        (moduleType === AppModules.char && charErrors.length > 0) ? (
          <aside 
            className="errorMark"
            onClick={(): void => dispatch(toggleErrorPanel(true))}
          >
            <div className="errorMark__count"> 
              <span> ! </span>
            </div>
            <div className="errorMark__message"> 
              <span> 
                { moduleType === AppModules.map ? mapErrors.length : null }
                { moduleType === AppModules.char ? charErrors.length : null }
              </span>
              errors
            </div>
          </aside>
        ) : null
      }
    </>
  );
};