import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImgGallery } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: null,
  };

  onOpenModal = () => {
    this.setState({ largeImageURL: this.props.image.largeImageURL });
  };

  onCloseModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { tags, webformatURL } = this.props.image;
    const { largeImageURL } = this.state;
    return (
      <>
        <ImgGallery onClick={this.onOpenModal} src={webformatURL} alt={tags} />
        {largeImageURL && (
          <Modal
            modalImage={largeImageURL}
            tags={tags}
            onClose={this.onCloseModal}
          />
        )}
      </>
    );
  }
}
