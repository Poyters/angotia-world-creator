import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapConfig from '../../../../assets/configs/map.config.json';
import { setVisibilityRange } from '../../../../store/actions/mapActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IPopup } from '../../../../interfaces/popup.interface';
import { useTranslation } from 'react-i18next';


export const VisibilityPopup: React.FC<IPopup> = ({ isActivePopup }) => {
    const { t } = useTranslation(['common', 'map', 'notifications']);
    const defaultRange = useSelector((state: IStore) => state.map.visibilityRange);
    const [error, setError] = useState<boolean>(false);
    const [visibility, setVisibility] = useState(defaultRange);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            visibility < mapConfig?.visibility?.min || 
            visibility > mapConfig?.visibility?.max ||
            !Number(visibility)
        ) {
            setError(true);
        }
        else setError(false);

    }, [visibility]);

    useEffect(() => {
        const keyPressHandler = (event): void => {
            if (event.key === 'Escape') isActivePopup(false);
            else if (event.key === 'Enter') submitVisibility();
        };

        document.addEventListener('keydown', keyPressHandler);
        return () => {
            document.removeEventListener('keydown', keyPressHandler);
        };
    });

    const submitVisibility = ():void => {
        if (error) return;
        
        dispatch(setVisibilityRange(visibility));
        isActivePopup(false);
        addNotification(t('notifications:notes.visibility.change'));
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => isActivePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    { t('map:visibility.title') }
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { 
                        t('map:visibility.description', {
                            min: mapConfig?.visibility?.min,
                            max: mapConfig?.visibility?.max
                        }) 
                    }
                </label>
                <input 
                    type='text' 
                    value={visibility} 
                    onChange={e => setVisibility(parseInt(e.target.value))}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
                            { t('map:visibility.error') }
                        </span>
                    ) : null
                }                

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={submitVisibility} 
                    disabled={error}
                > 
                    { t('common:submit') }
                </button>
            </div>
        </div>
    );
};