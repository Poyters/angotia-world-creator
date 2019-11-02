import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';


interface IFSImageOption {
    closePopup: Function
}


const AddFSImagePopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const [vertexWeightValue, setVertexWeightValue] = useState<string>("");
    const [categoryError, setCategoryError] = useState<boolean>(false);
    const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>("");
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);

    useEffect((): void => {
        if (
            parseInt(vertexWeightValue) < creatorConfig.vertexWeight.min || 
            parseInt(vertexWeightValue) > creatorConfig.vertexWeight.max || 
            !vertexWeightMatrix || 
            !Number(vertexWeightValue)
        ) {
            setCategoryError(true);
        }
        else setCategoryError(false);

    }, [vertexWeightValue]);

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
                <input 
                    type='text' 
                    value={vertexWeightValue} 
                    onChange={e => setVertexWeightValue(e.target.value)}
                />
                {
                    (categoryError) ? (
                        <span className="insertPopup--error">Type proper value (number)</span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={(): void => insertImage()} disabled={categoryError || !isLoadedImage}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};


export default AddFSImagePopup;