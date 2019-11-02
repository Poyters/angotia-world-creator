import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';


//Import components
import AddFSImagePopup from './BoardNamePopup';


const BoardNameOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);

    return (
        <Fragment>
            { isPopup ? ReactDOM.createPortal(
                <AddFSImagePopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => setIsPopup(true)} 
                data-title="add own pics to Files Panel"
            >
				<div className="vertexWeightOption">
					<div className="vertexWeightOption__number">
                        { creatorConfig.vertexWeight.max }
					</div>
				</div>
			</div>
        </Fragment>
    );
};


export default BoardNameOption;