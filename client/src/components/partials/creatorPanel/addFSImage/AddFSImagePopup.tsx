import React, { useState } from 'react';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import contexts
import { ContentContext } from '../../../../Template';


interface IFSImageOption {
    closePopup: Function
}


const AddFSImagePopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>("");
    const [currBookmark, setCurrBookmark] = useState<string>(creatorConfig.bookmarks[0]);

    const handleFileSelect = (evt: any) => {
        const file = evt.target.files[0]; 
        const reader = new FileReader();
    
        reader.onload = (():any => {
          return (e) => {
            const path: string = e.target.result;
            setIsLoadedImage(true);
            console.log(path);
          };
    
        })();
    
        setFileName(file.name);
        reader.readAsDataURL(file);
    };

    const insertImage = (): void => {
        console.log('Insert image process');

        closePopup(false);
    };

    return (
        <ContentContext.Consumer>
			{({ creator }) => (
                <div className="g-container g-container--popup">
                    <div role="alert" className="insertPopup">
                        <div 
                            className="g-exitBtn g-exitBtn--popup"
                            onClick={():void => closePopup(false)}
                        > </div>
                        <header className="insertPopup__header t-paragraph3Light">
                            {creator.panel.options.addFSImage.title}
                        </header>
                        <label className="insertPopup__label t-paragraph6Light">
                            {creator.panel.options.addFSImage.image}
                        </label>
                        <input 
                            type="file" 
                            id="addFSImageInput" 
                            onChange={evt => handleFileSelect(evt)}
                            className="addFSImageBtn"
                        />
                        <label htmlFor="addFSImageInput">{fileName}</label>
                        {
                            (!isLoadedImage) ? (
                                <span className="insertPopup--error">
                                    {creator.panel.options.addFSImage.error}
                                </span>
                            ) : null
                        }
                        <label className="insertPopup__label t-paragraph6Light">
                            {creator.panel.options.addFSImage.category}
                        </label>
                        <div 
                            className="addFSImageSelect"
                            onClick={(): void => setIsSelectOpen(!isSelectOpen)}
                        >
                            <span> { currBookmark } </span>
                            {
                                (isSelectOpen) ? (
                                <ul>
                                    { creatorConfig.bookmarks.map((bookmark, index) => {
                                        if (bookmark !== currBookmark) {
                                            return (
                                                <li 
                                                    onClick={(): void => setCurrBookmark(bookmark)}
                                                    key={index}
                                                > 
                                                    { bookmark } 
                                                </li>
                                            );
                                        }  
                                    })}  
                                </ul>
                                ): null
                            }
                            
                        </div>
        
                        <button 
                            type="submit" 
                            className="insertPopup__submit t-paragraphLight" 
                            onClick={(): void => insertImage()} disabled={!isLoadedImage}
                        > 
                            {creator.panel.options.addFSImage.submit} 
                        </button>
                    </div>
                </div>
            )}
        </ContentContext.Consumer>
    );
};


export default AddFSImagePopup;