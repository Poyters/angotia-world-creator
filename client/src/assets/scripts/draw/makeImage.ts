export const makeImage = imgPath => {
    const image = new Image();
    image.src = imgPath;
    
    return image;
}