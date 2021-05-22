import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AddFSImagePopup } from './AddFSImagePopup';
import { ContentContext } from '../../../../Template';


export const AddFSImageOption: React.FC = () => {
    const { creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<boolean>(false);

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <AddFSImagePopup isActivePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => setIsPopup(true)} 
                data-title={creator?.panel?.options?.addFSImage?.dataTitle}
            >
                <div className="addFSImageOption">

                </div>
            </div>
        </>
    );
};