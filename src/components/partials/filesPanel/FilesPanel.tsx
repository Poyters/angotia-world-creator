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
                    FilesPanel component

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