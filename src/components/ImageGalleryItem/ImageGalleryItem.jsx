import { ImgGallery } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({image: {tags, webformatURL, largeImageURL}}) => {
  return (
      <ImgGallery src={webformatURL} alt={tags} />
  );
};
