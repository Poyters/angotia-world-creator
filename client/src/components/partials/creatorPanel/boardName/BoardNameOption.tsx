import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

//Import components
import BoardNamePopup from './BoardNamePopup';


const BoardNameOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const mapName = useSelector(state => state.ui.mapName);

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <BoardNamePopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option option--textOption option--smallerMargin" 
                onClick={(): void => setIsPopup(true)} 
                data-title="change map name"
            >
                N: <span className="boardNameOption">
                    { mapName }
                </span>
			</div>
        </>
    );
};


export default BoardNameOption;