import React, { Fragment, useState } from 'react';

//Import components
import Arrow from '../Arrow';


const FilesPanel: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filesPanelStyles = {
        right: isOpen ? "0" : "-300px"
    }

    return (
        <Fragment>
            <div className="filesPanelSwitch t-paragraph4Normal" onClick={() => setIsOpen(true)}> Open files panel</div>
            <aside className="filesPanelWrapper" style={filesPanelStyles}>
                <div className="filesPanel">
                    <nav className="filesPanel__bookmarks t-paragraph5Normal">
                        <ul>
                            <li>
                                Building
                            </li>
                            <li>
                                Decoration
                            </li>
                            <li>
                                Subsoil
                            </li>
                            <li>
                                MOB
                            </li>
                            <li>
                                NPC
                            </li>
                        </ul>
                    </nav>

                    <div className="filesPanel__imagesContainer">
                    
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