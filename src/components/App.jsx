import React, { Component } from 'react';
import { Container } from './App.styled';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';




// return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}`, options)
// .then(resp => resp.json())
// .then(data => {
//     this.incrimentPage()
//     return data.hits
// ${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=12`

export class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
  }

  hendleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
  }



  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.hendleFormSubmit}/>
        <ImageGallery searchQuery={this.state.searchQuery} page={this.state.page}/>
        <Button/>
      </Container>
    )
  }
}


