import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changeMapName } from '../../../../store/actions/mapActions';
import { setActionNote } from '../../../../assets/scripts/notifications';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { ContentContext } from '../../../../Template';


interface IBoardNamePopup {
    closePopup: Function
}

export const BoardNamePopup: React.FC<IBoardNamePopup> = ({ closePopup }) => {
    const { notifications } = useContext(ContentContext);
    const [mapName, setMapName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect((): void => {
        if (
            mapName.length < creatorConfig?.mapName?.minLength || 
            mapName.length > creatorConfig?.mapName?.maxLength
        ) {
            setError(true);
        }
        else setError(false);

    }, [mapName]);


    const insertImage = (): void => {
        dispatch(changeMapName(mapName));
        closePopup(false);
        setActionNote(notifications?.boardName?.change);
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    Change board name
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    Name
                    ({creatorConfig?.mapName?.minLength} - {creatorConfig?.mapName?.maxLength})
                </label>
                <input 
                    type='text' 
                    value={mapName} 
                    onChange={e => setMapName(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">Type proper value (string)</span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={(): void => insertImage()} disabled={error}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};