import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import contexts
import { ContentContext } from '../../../../Template';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import actions
import { setVisibilityRange } from '../../../../redux/actions/mapActions';


interface IVisibilityPopup {
    closePopup: Function
}


const VisibilityPopup: React.FC<IVisibilityPopup> = ({ closePopup }) => {
    const dafaultRange = creatorConfig.visibility.default.toString();
    const { creator } = useContext(ContentContext);
    const [error, setError] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<string>(dafaultRange);
    const dispatch = useDispatch();

    useEffect((): void => {
        if (
            parseInt(visibility) < creatorConfig.visibility.min || 
            parseInt(visibility) > creatorConfig.visibility.max ||
            !Number(visibility)
        ) {
            setError(true);
        }
        else setError(false);

    }, [visibility]);

    const sumbitHandler = (): void => {
        dispatch(setVisibilityRange(parseInt(visibility)));
        closePopup(false);
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    Set player visibility range 
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    range (fields)
                    ({creatorConfig.visibility.min} - {creatorConfig.visibility.max})
                </label>
                <input 
                    type='text' 
                    value={visibility} 
                    onChange={e => setVisibility(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">Type proper value (number)</span>
                    ) : null
                }                

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={sumbitHandler}
                    disabled={error}
                > 
                    {creator.panel.options.addFSImage.submit} 
                </button>
            </div>
        </div>
    );
};


export default VisibilityPopup;