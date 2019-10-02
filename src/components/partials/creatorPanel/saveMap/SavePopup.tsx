import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { saveFile } from '../../../../assets/scripts/saveFile';


interface ISavePopup {
    closePopup: Function
}


const SavePopup: React.FC<ISavePopup> = ({ closePopup }) => {
    const [mapName, setMapName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const mapData = useSelector(state => state.map);

    useEffect(() => {
        if (!mapName || mapName.length <= 0) setError(true);
        else setError(false);

    }, [mapName])

    const saveMap = () => {
        saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
        closePopup(false);
    }

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <header className="insertPopup__header t-paragraph3Light"> Save map </header>
                <label className="insertPopup__label t-paragraph6Light">Map name</label>
                <input type='text' value={mapName} onChange={e => setMapName(e.target.value)}/>
                {
                    (error) ? (
                        <span className="insertPopup--error">Type map name</span>
                    ) : null
                }

                <button type="submit" className="insertPopup__submit t-paragraphLight" onClick={() => saveMap()} disabled={error}> submit </button>
            </div>
        </div>
    )
}


export default SavePopup;