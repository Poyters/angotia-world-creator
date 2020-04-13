import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import { ContentContext } from '../../../Template';


export const LayersOption: React.FC = () => {
    const { creator } = useContext(ContentContext);
    const [isOpen, setIsOpen] = useState<Boolean>(false);    
    const [layersToRender, setLayersToRender] = useState<any>(null);
    const mapBackgorund = useSelector(state =>  state.map.mapPic);

    const layersListStyles = {
        display: isOpen ? 'block' : 'none'
    };

    useEffect((): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        const ltr = Array.from(layers).map((layer: any) => {
            const layerName = layer.dataset.layername;
            return (
                <li 
                    id={`${layerName}Btn`} 
                    className="layersList__layer layersList__layer--active" 
                    key={uuid()} 
                    onClick={(): void => toggleLayer(layerName)} 
                    data-title={`click to toggle ${layerName} layer`}
                >
                    {layerName}
                </li>
            );
        });

        setLayersToRender(ltr);

    }, []);

    let isBackgroundVisible: boolean = true;
    const toggleBackground = (): void => {
        const map: any = document.getElementById('map');
        const button: any = document.getElementById(`backgroundBtn`);

        if (isBackgroundVisible) map.style.backgroundImage = '';
        else map.style.backgroundImage = `url('${mapBackgorund}')`;

        button.classList.toggle('layersList__layer--active');
        isBackgroundVisible = !isBackgroundVisible;
    };

    const toggleLayer = (layerName: string): void => {
        const layers: HTMLCollectionOf<Element> = document.getElementsByClassName('js-mapLayer');

        Array.from(layers).forEach((layer: any) => {
            const name: string = layer?.dataset?.layername;
  
            if (name === layerName) {
                const computedDisplay: string | null = getComputedStyle(layer).display;
                const display: string = layer.style.display === '' ? 
                    computedDisplay : layer.style.display;
                const button: any = document.getElementById(`${name}Btn`);

                if (display === 'block') layer.style.display = "none";
                else layer.style.display = "block";

                button.classList.toggle('layersList__layer--active');
 
            }
        });
    };

    return (
        <>
            <div 
                role="button" 
                className="option option--textOption option--layers" 
                onClick={(): void => setIsOpen(!isOpen)}
            > 
                <span>
                    {creator?.panel?.options?.layers?.title}
                </span>
            </div>
            <ul className="layersList" style={layersListStyles}>
                <li 
                    id="backgroundBtn" 
                    onClick={toggleBackground} 
                    className="layersList__layer layersList__layer--active"
                >
                    { creator?.panel?.options?.layers?.bg }
                </li>
                { layersToRender }
            </ul>
        </>
    );
};