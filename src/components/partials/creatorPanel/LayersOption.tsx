import React, { useState, useEffect, Fragment } from 'react';


const LayersOption: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);    
    const [layersToRender, setLayersToRender] = useState<any>(null);

    const layersListStyles = {
        opacity: isOpen ? 1 : 0
    }

    useEffect(() => {
        const layers = document.getElementsByClassName('js-mapLayer');

        const ltr = Array.from(layers).map((layer: any, id: number) => {
            return (
                <li key={id}>{layer.dataset.layername}</li>
            )
        })

        setLayersToRender(ltr);

    }, [])

    return (
        <Fragment>
            <div role="button" className="option option--textOption" onClick={() => setIsOpen(!isOpen)}> 
                <span>Layers</span>
            </div>
            <ul className="layersList" style={layersListStyles}>
                { layersToRender }
            </ul>
        </Fragment>
    )
}


export default LayersOption;