import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { VisibilityPopup } from './VisibilityPopup';
import { ContentContext } from '../../../../Template';


export const VisibilityOption: React.FC = () => {
    const { creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const range: number = useSelector(state => state.map.visibilityRange);

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <VisibilityPopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => setIsPopup(true)} 
                data-title={creator?.panel?.options?.visibility?.dataTitle}
            >
                <div className="visibilityOption"> </div>
            </div>
        </>
    );
};