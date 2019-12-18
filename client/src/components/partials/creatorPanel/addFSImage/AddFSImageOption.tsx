import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

//Import components
import AddFSImagePopup from './AddFSImagePopup';

//Import contexts
import { ContentContext } from '../../../../Template';


const AddFSImageOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);

    return (
        <ContentContext.Consumer>
			{({ creator }) => (
                <Fragment>
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
                </Fragment>
            )}
        </ContentContext.Consumer>
    );
};


export default AddFSImageOption;