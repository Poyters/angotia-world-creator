import React, { useState, useContext, useEffect } from 'react';

//Import contexts
import { ContentContext } from '../../../../Template';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';


interface IFSImageOption {
    closePopup: Function
}


const VisibilityPopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const dafaultRange = creatorConfig.visibility.default.toString();
    const { creator } = useContext(ContentContext);
    const [error, setError] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<string>(dafaultRange);

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

    const submitVisibility = ():void => {

    }


    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    { creator.panel.options.visibility.title } 
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator.panel.options.visibility.desc } 
                    ({creatorConfig.visibility.min} - {creatorConfig.visibility.max})
                </label>
                <input 
                    type='text' 
                    value={visibility} 
                    onChange={e => setVisibility(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
                            { creator.panel.options.visibility.error } 
                        </span>
                    ) : null
                }                

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={submitVisibility} 
                    disabled={error}
                > 
                    {creator.panel.options.visibility.submit} 
                </button>
            </div>
        </div>
    );
};


export default VisibilityPopup;