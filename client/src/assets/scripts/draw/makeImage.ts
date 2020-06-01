export const makeImage = async imgPath => {
    const image = new Image();
    image.src = imgPath;
    
    return image;
};