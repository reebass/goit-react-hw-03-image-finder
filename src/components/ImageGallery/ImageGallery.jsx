import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ItemGallery, ListGallery } from './ImageGallery.styled';



export const ImageGallery = ({images}) => {
    return (
      <ListGallery className="gallery">
        {images.map(image => (
            <ItemGallery key={image.id}>
                <ImageGalleryItem image={image}/>
            </ItemGallery>
        ))}
        
      </ListGallery>
    );
  }


