import React from 'react';


interface IPassageOption {
    closePopup: Function
}


const PassageOption: React.FC<IPassageOption> = ({ closePopup }) => {

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="passagePopup"> 
                <header className="passagePopup__header t-paragraph3Light"> Add passage </header>
                <label className="passagePopup__label t-paragraph6Light">Target map id </label>
                <input type='text'/>
                <label className="passagePopup__label t-paragraph6Light">Target map coordinations </label>
                <input type='text'/>

                <button type="submit" className="passagePopup__submit t-paragraphLight" onClick={() => closePopup(false)}> submit </button>
            </div>
        </div>
    )
}


export default PassageOption;