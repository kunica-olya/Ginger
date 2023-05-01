import GalleryView from './GalleryView';

export default function GalleryLoader() {
    const handlerImageLoader = () => {
        // eslint-disable-next-line no-console
        console.log('Image is loaded');
    };

    return (
      <GalleryView handlerImageLoader={handlerImageLoader} />
    );
}
