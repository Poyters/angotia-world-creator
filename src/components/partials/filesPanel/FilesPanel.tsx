import React, { Fragment, useState } from 'react';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import scripts
import { importAll } from '../../../assets/scripts/files';

//Import components
import Arrow from '../Arrow';

//Import images
import test1 from '../../../assets/images/mapSources/building/test1.png';
import test2 from '../../../assets/images/mapSources/decoration/test2.png';
import test3 from '../../../assets/images/mapSources/mob/test3.png';
import test4 from '../../../assets/images/mapSources/npc/test4.png';
import test5 from '../../../assets/images/mapSources/subsoil/test3.png';


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
        const bookmarkImages: any = []

        switch(currBookmark) { //TODO: replace with api and database
            case 'building':
                bookmarkImages.push(test1);
                bookmarkImages.push(test2);
                bookmarkImages.push(test2);
                bookmarkImages.push(test2);
                bookmarkImages.push(test2);
                bookmarkImages.push(test2);
            break;
            case 'decoration':
                bookmarkImages.push(test2);
            break;
            case 'subsoil':
                bookmarkImages.push(test3);
            break;
            case 'mob':
                bookmarkImages.push(test4);
            break;
            case 'npc':
                bookmarkImages.push(test5);
            break;
        }

        const imagesToRender: any[] = bookmarkImages.map((img, index) => {
            return (
                <li key={index} style={imageStyle}> 
                    <img src={img}></img>
                </li>
            )
        })

        return imagesToRender;
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