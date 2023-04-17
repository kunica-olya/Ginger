import {GalleryView} from "./GalleryView"

export const GalleryLoader = () => {

    const handlerImageLoader = () => {
        console.log('Image is loaded');
    }

    return (
        <GalleryView handlerImageLoader={handlerImageLoader}/>
    )
}