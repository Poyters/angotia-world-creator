import React, { useState, useEffect, Fragment } from 'react';


const LayersOption = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const layersListStyles = {
        opacity: isOpen ? 1 : 0
    }


    let layersToRender;
    useEffect(() => {
        const layers = document.getElementsByClassName('j-mapLayers');
        console.log(layers)

        layersToRender = Array.of(layers).map(layer => {
            console.log(layer);
        })
    }, [])

    return (
        <Fragment>
            <div role="button" className="option option--textOption" onClick={() => setIsOpen(!isOpen)}> 
                <span>Layers</span>
            </div>
            <ul className="layersList" style={layersListStyles}>
                <li>Block squares</li>
                <li>Mobs</li>
                <li>NPCs</li>
                <li>Background Image</li>
            </ul>
        </Fragment>
    )
}


export default LayersOption;