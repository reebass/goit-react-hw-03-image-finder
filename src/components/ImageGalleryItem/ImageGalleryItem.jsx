import { ImgGallery } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({image: {webformatURL, largeImageURL}}) => {
  return (
      <ImgGallery src={webformatURL} alt="" />
  );
};
