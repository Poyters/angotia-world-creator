import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';


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
          };
    
        })();
    
        setFileName(file.name)
        reader.readAsDataURL(file);
    };

    const insertImage = (): void => {
        console.log('Insert image process');

        closePopup(false);
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light">
                    Add image to Files Panel
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    Choose image
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
                        <span className="insertPopup--error">You need to choose pic</span>
                    ) : null
                }
                <label className="insertPopup__label t-paragraph6Light">
                    Select category
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
                                    )
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
                    submit 
                </button>
            </div>
        </div>
    );
};


export default AddFSImagePopup;