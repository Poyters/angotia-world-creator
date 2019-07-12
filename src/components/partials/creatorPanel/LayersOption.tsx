import React, { useState, useEffect, Fragment } from 'react';


const LayersOption: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);    
    const [layersToRender, setLayersToRender] = useState<any>(null);

    const layersListStyles = {
        opacity: isOpen ? 1 : 0
    }

    useEffect((): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        const ltr = Array.from(layers).map((layer: any, id: number) => {
            const layerName = layer.dataset.layername;
            return (
                <li key={id} onClick={() => toggleLayer(layerName)}>{layerName}</li>
            )
        })

        setLayersToRender(ltr);

    }, [])

    const toggleLayer = (layerName: string): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        Array.from(layers).forEach((layer: any) => {
            const name = layer.dataset.layername;
  
            if (name === layerName) {
                const computedDisplay = getComputedStyle(layer).display;
                const display = layer.style.display === '' ? computedDisplay : layer.style.display;

                if (display === 'block') layer.style.display = "none";
                else layer.style.display = "block";
            }
        })
    }

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