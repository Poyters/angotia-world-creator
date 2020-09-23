import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentContext } from '../../../../Template';
import creatorConfig from '../../../../assets/configs/creator.config.json';
import { setVisibilityRange } from '../../../../store/actions/mapActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';


interface IVisibilityPopup {
    closePopup: Function
}

export const VisibilityPopup: React.FC<IVisibilityPopup> = ({ closePopup }) => {
    const dafaultRange: string = useSelector((state: IStore) => state.map.visibilityRange);
    const { creator, notifications } = useContext(ContentContext);
    const [error, setError] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<string>(dafaultRange);
    const dispatch = useDispatch();

    useEffect((): void => {
        if (
            parseInt(visibility) < creatorConfig?.visibility?.min || 
            parseInt(visibility) > creatorConfig?.visibility?.max ||
            !Number(visibility)
        ) {
            setError(true);
        }
        else setError(false);

    }, [visibility]);

    useEffect(() => {
        const keyPressHandler = (event): void => {
            if (event.key === 'Escape') closePopup(false);
            else if (event.key === 'Enter') submitVisibility();
        };

        document.addEventListener('keydown', keyPressHandler);
        return () => {
            document.removeEventListener('keydown', keyPressHandler);
        };
    });

    const submitVisibility = ():void => {
        if (error) return;
        
        dispatch(setVisibilityRange(parseInt(visibility)));
        closePopup(false);
        addNotification(notifications?.visibility?.change);
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    { creator?.panel?.options?.visibility?.title } 
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator?.panel?.options?.visibility?.desc } 
                    ({creatorConfig?.visibility?.min} - {creatorConfig?.visibility?.max})
                </label>
                <input 
                    type='text' 
                    value={visibility} 
                    onChange={e => setVisibility(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
                            { creator?.panel?.options?.visibility?.error } 
                        </span>
                    ) : null
                }                

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={submitVisibility} 
                    disabled={error}
                > 
                    {creator?.panel?.options?.visibility?.submit} 
                </button>
            </div>
        </div>
    );
};