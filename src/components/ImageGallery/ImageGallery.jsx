import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ItemGallery, ListGallery } from './ImageGallery.styled';



export const ImageGallery = ({queryImages}) => {

    return (
      <ListGallery className="gallery">
        {queryImages.map(image => (
            <ItemGallery key={image.id}>
                <ImageGalleryItem image={image}/>
            </ItemGallery>
        ))}
        
      </ListGallery>
    );
  }

