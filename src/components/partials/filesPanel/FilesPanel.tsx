import React, { Fragment, useState } from 'react';
import { readdirSync } from 'fs';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import scripts
import { importAll } from '../../../assets/scripts/files';

//Import components
import Arrow from '../Arrow';


const bookmarks: string[] = ['building', 'decoration', 'subsoil', 'npc', 'mob'];

const FilesPanel: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currBookmark, setCurrBookmark] = useState<string>(bookmarks[0]);

    const filesPanelStyles = {
        right: isOpen ? "0" : "-300px"
    }

    const imageStyle = {
        width: `${creatorConfig.map.fieldSize}px`,
        height: `${creatorConfig.map.fieldSize}px`
    }
    
    const generateImages = (): any[] => {
        const test = importAll(require.context(`/assets/images/mapSource/${currBookmark}`, false, /\.(png|jpe?g|svg)$/));
        console.log(test)

        const images: any[] = [];

        for (let i = 0; i < 50; i++) {
            images.push(<li key={i} style={imageStyle}> </li>)
        }

        return images;
    }

    const generateBookmarks = (): any[] => {
        const bookmarksToRender: any[] = bookmarks.map((bookmark, index) => {
            return <li 
                        key={index} 
                        onClick={() => setCurrBookmark(bookmark)} 
                        style={{color: currBookmark === bookmark ? '#27427c' : 'inherit'}}
                    > {bookmark} </li>
        });

        return bookmarksToRender;
    }

    return (
        <Fragment>
            <div className="filesPanelSwitch t-paragraph4Normal" onClick={() => setIsOpen(true)}> Open files panel</div>
            <aside className="filesPanelWrapper" style={filesPanelStyles}>
                <div className="filesPanel">
                    <nav className="filesPanel__bookmarks t-paragraph5Normal">
                        <ul>
                            { generateBookmarks() }
                        </ul>
                    </nav>

                    <div className="filesPanel__imagesContainer">
                        <ul>
                            { generateImages() }
                        </ul>
                    </div>

                    <div className="filesPanel__switch t-paragraph4Normal" onClick={() => setIsOpen(false)}>
                        <span>Hide files panel</span>
                        <Arrow additionalClass="arrow--filesPanel"/>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}


export default FilesPanel;