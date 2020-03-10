import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

//Import components
import VisibilityPopup from './VisibilityPopup';

//Import contexts
import { ContentContext } from '../../../../Template';


const VisibilityOption: React.FC = () => {
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
                data-title={'player visibility range'}
            >
                <div className="visibilityOption">
                    <div className="visibilityOption__range"> 
                        { range }
                    </div>
                </div>
            </div>
        </>
    );
};


export default VisibilityOption;