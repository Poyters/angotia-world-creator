import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { VisibilityPopup } from './VisibilityPopup';
import { ContentContext } from '../../../../Template';


export const VisibilityOption: React.FC = () => {
    const { creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <VisibilityPopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => setIsPopup(true)} 
                data-title={creator.panel.options.visibility.dataTitle}
            >
                <div className="visibilityOption"> </div>
            </div>
        </>
    );
};