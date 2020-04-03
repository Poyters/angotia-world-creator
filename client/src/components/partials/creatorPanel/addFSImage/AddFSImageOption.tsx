import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import AddFSImagePopup from './AddFSImagePopup';
import { ContentContext } from '../../../../Template';


const AddFSImageOption: React.FC = () => {
    const { creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <AddFSImagePopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => setIsPopup(true)} 
                data-title={creator.panel.options.addFSImage.dataTitle}
            >
                <div className="addFSImageOption">

                </div>
            </div>
        </>
    );
};


export default AddFSImageOption;