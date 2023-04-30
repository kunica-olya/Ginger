import GalleryView from './GalleryView';

export function GalleryLoader() {
  const handlerImageLoader = () => {
    console.log('Image is loaded');
  };

  return (
    <GalleryView handlerImageLoader={handlerImageLoader} />
  );
}
