import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import { IStore } from '../../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';
import { addNotification } from '../../../scripts/utils/notifications';


export const LayersOption: React.FC = () => {
    const { t } = useTranslation(['map', 'notifications']);
    const [layersToRender, setLayersToRender] = useState<any>(null);
    const mapBackgorund = useSelector((state: IStore) => state.map.mapPic);


    useEffect((): void => {
        const layers = document.getElementsByClassName('js-mapLayer');

        const ltr = Array.from(layers).map((layer: any) => {
            const layerName = layer.dataset.layername;

            return (
                <li 
                    id={`${layerName}Btn`}
                    key={uuid()} 
                    onClick={(): void => toggleLayer(layerName)}
                >
                    { t(`map:layers.${layerName}`)}
                </li>
            );
        });

        setLayersToRender(ltr);

    }, []);

    let isBackgroundVisible = true;
    const toggleBackground = (): void => {
        const map: any = document.getElementById('map');
        const button: any = document.getElementById('backgroundBtn');

        if (isBackgroundVisible) map.style.backgroundImage = '';
        else map.style.backgroundImage = `url('${mapBackgorund}')`;

        button.classList.toggle('disableLayer');
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

                if (display === 'block') {
                    layer.style.display = 'none';
                    addNotification(
                        t(
                            'notifications:notes.layers.off',
                            { layer: t(`map:layers.${layerName}`) }
                        )
                    );
                } else {
                    layer.style.display = 'block';
                    addNotification(
                        t(
                            'notifications:notes.layers.on',
                            { layer: t(`map:layers.${layerName}`) }
                        )
                    );
                }

                button.classList.toggle('disableLayer');
 
            }
        });
    };

    return (
        <div className="layersMenu">
            <header className="layersMenu__label t-paragraph6Normal">
                { t('map:layersTitle') } 
            </header>
            <ul className="layersMenu__content t-paragraph2Light">
                <li 
                    id="backgroundBtn" 
                    onClick={toggleBackground}
                >
                     { t('map:layers.bg') }
                </li>
                { layersToRender }
            </ul>
        </div>
    );
};