import React, { Component } from 'react';
import { Container } from './App.styled';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

const API_KEY = '31630114-541891e344088f225cf30f54b';
const BASE_URL = 'https://pixabay.com/api/';

const options = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export class App extends Component {
  state = {
    searchQuery: '',
    queryImages: [],
    page: 1,
    loading: false,
    total: null,
  };



  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      this.setState({ page: 1 });
      fetch(
        `${BASE_URL}?key=${API_KEY}&q=${nextQuery}&page=${this.state.page}&per_page=80`,
        options
      )
        .then(res => res.json())
        .then(queryImages =>
          this.setState({
            queryImages: queryImages.hits,
            total: queryImages.totalHits - queryImages.hits.length,
          })
        )
        .finally(() => this.setState({ loading: false }));
    }

    // const prevPage = prevState.page;
    // const nextPage = this.state.page;

    // if (prevPage !== nextPage) {

  }

  
  hendleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  onIncrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.setState({ loading: true });
    fetch(
      `${BASE_URL}?key=${API_KEY}&q=${this.state.searchQuery}&page=${this.state.page}&per_page=80`,
      options
    )
      .then(res => res.json())
      .then(queryImages =>
        this.setState(prev => ({
          queryImages: [...prev.queryImages, ...queryImages.hits],
          total: prev.total - queryImages.hits.length,
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { queryImages, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery queryImages={queryImages} />
        {queryImages.length > 0 && total >= 0 && (
          <Button onLoadmore={this.onIncrementPage} />
        )}
      </Container>
    );
  }
}
