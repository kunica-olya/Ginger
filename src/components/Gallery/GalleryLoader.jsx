import GalleryView from './GalleryView';

export default function GalleryLoader() {
                    const handlerImageLoader = () => {
                                        console.log('Image is loaded');
                    };

                    return (
                      <GalleryView handlerImageLoader={handlerImageLoader} />
                    );
}
