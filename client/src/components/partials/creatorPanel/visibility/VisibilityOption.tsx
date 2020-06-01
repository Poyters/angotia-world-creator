import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { useSelector } from 'react-redux';

//Import components
import VisibilityPopup from './VisibilityPopup';

//Import contexts
=======
import { VisibilityPopup } from './VisibilityPopup';
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
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
<<<<<<< HEAD
                data-title={creator.panel.options.visibility.dataTitle}
            >
                <div className="visibilityOption">
                    <div className="visibilityOption__range"> 
                        { range }
                    </div>
                </div>
=======
                data-title={creator?.panel?.options?.visibility?.dataTitle}
            >
                <div className="visibilityOption"> </div>
>>>>>>> 2417667d79aa4f9d59f4d6f2f3f2ae10a332be47
            </div>
        </>
    );
};