import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';


const LayersOption: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);    
    const [layersToRender, setLayersToRender] = useState<any>(null);
    const mapBackgorund = useSelector(state =>  state.map.mapPic);

    const layersListStyles = {
        display: isOpen ? 'block' : 'none'
    }

    useEffect((): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        const ltr = Array.from(layers).map((layer: any, id: number) => {
            const layerName = layer.dataset.layername;
            return (
                <li 
                    id={`${layerName}Btn`} 
                    className="layersList__layer layersList__layer--active" 
                    key={id} 
                    onClick={() => toggleLayer(layerName)} 
                    data-title={`click to toggle ${layerName} layer`}
                >
                    {layerName}
                </li>
            )
        })

        setLayersToRender(ltr);

    }, [])

    let isBackgroundVisible: boolean = true;
    const toggleBackground = () => {
        const map: any = document.getElementById('map');
        const button: any = document.getElementById(`backgroundBtn`);

        if (isBackgroundVisible) map.style.backgroundImage = '';
        else map.style.backgroundImage = `url('${mapBackgorund}')`

        button.classList.toggle('layersList__layer--active');
        isBackgroundVisible = !isBackgroundVisible;
    }

    const toggleLayer = (layerName: string): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        Array.from(layers).forEach((layer: any) => {
            const name: string = layer.dataset.layername;
  
            if (name === layerName) {
                const computedDisplay = getComputedStyle(layer).display;
                const display: string = layer.style.display === '' ? computedDisplay : layer.style.display;
                const button: any = document.getElementById(`${name}Btn`);

                if (display === 'block') layer.style.display = "none";
                else layer.style.display = "block";

                button.classList.toggle('layersList__layer--active');
 
            }
        })
    }

    return (
        <Fragment>
            <div role="button" className="option option--textOption option--layers" onClick={() => setIsOpen(!isOpen)}> 
                <span>Layers</span>
            </div>
            <ul className="layersList" style={layersListStyles}>
                <li 
                    id="backgroundBtn" 
                    onClick={toggleBackground} 
                    className="layersList__layer layersList__layer--active"
                >
                    background
                </li>
                { layersToRender }
            </ul>
        </Fragment>
    )
}


export default LayersOption;