import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ItemGallery, ListGallery } from './ImageGallery.styled';

const API_KEY = '31630114-541891e344088f225cf30f54b';
const BASE_URL = 'https://pixabay.com/api/';

const options = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export class ImageGallery extends Component {
  state = {
    queryImages: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const { page } = this.props;
    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?key=${API_KEY}&q=${nextQuery}&page=${page}&per_page=12,`,
        options
      )
        .then(res => res.json())
        .then(queryImages => this.setState({queryImages: queryImages.hits}))
        .finally(() => this.setState({ loading: true }));
    }
  }

  perebor = () => {
    this.state.queryImages.map(image => console.log(image.id))
  }

  render() {
    return (
      <ListGallery className="gallery">
        {this.state.queryImages.map(image => (
            <ItemGallery key={image.id}>
                <ImageGalleryItem image={image}/>
            </ItemGallery>
        ))}
        
      </ListGallery>
    );
  }
}
