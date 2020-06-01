import React, { useState, useContext, useEffect } from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';

//Import contexts
=======
import { useSelector, useDispatch } from 'react-redux';
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
import { ContentContext } from '../../../../Template';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { setVisibilityRange } from '../../../../store/actions/mapActions';
import { addNotification } from '../../../../assets/scripts/notifications';
import { IStore } from '../../../../assets/interfaces/store';

//Import actions
import { setVisibilityRange } from '../../../../redux/actions/mapActions';


interface IVisibilityPopup {
    closePopup: Function
}

<<<<<<< HEAD

const VisibilityPopup: React.FC<IVisibilityPopup> = ({ closePopup }) => {
    const dafaultRange = creatorConfig.visibility.default.toString();
    const { creator } = useContext(ContentContext);
=======
export const VisibilityPopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const dafaultRange: string = useSelector((state: IStore) => state.map.visibilityRange);
    const { creator, notifications } = useContext(ContentContext);
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
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

<<<<<<< HEAD
    const sumbitHandler = (): void => {
        dispatch(setVisibilityRange(parseInt(visibility)));
        closePopup(false);
=======
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
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
<<<<<<< HEAD
                    { creator.panel.options.visibility.title }
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator.panel.options.visibility.label }
                    ({creatorConfig.visibility.min} - {creatorConfig.visibility.max})
=======
                    { creator?.panel?.options?.visibility?.title } 
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator?.panel?.options?.visibility?.desc } 
                    ({creatorConfig?.visibility?.min} - {creatorConfig?.visibility?.max})
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
                </label>
                <input 
                    type='text' 
                    value={visibility} 
                    onChange={e => setVisibility(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
<<<<<<< HEAD
                            { creator.panel.options.visibility.error }
=======
                            { creator?.panel?.options?.visibility?.error } 
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
                        </span>
                    ) : null
                }                

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
<<<<<<< HEAD
                    onClick={sumbitHandler}
                    disabled={error}
                > 
                    { creator.panel.options.visibility.submit }
=======
                    onClick={submitVisibility} 
                    disabled={error}
                > 
                    {creator?.panel?.options?.visibility?.submit} 
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
                </button>
            </div>
        </div>
    );
};