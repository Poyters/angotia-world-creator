import React, { Fragment, useState } from 'react';


const FilesPanel = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filesPanelStyles = {
        right: isOpen ? "0" : "-300px"
    }

    return (
        <Fragment>
            { !isOpen ? (
                <div className="filesPanelSwitch t-paragraph4Normal" onClick={() => setIsOpen(true)}> Open files panel</div>
            ) : null}
            <aside className="filesPanelWrapper" style={filesPanelStyles}>
                <div className="filesPanel">
                    FilesPanel component

                    <div className="filesPanel__switch t-paragraph4Normal" onClick={() => setIsOpen(false)}>Hide files panel</div>
                </div>
            </aside>
        </Fragment>
    )
}


export default FilesPanel;