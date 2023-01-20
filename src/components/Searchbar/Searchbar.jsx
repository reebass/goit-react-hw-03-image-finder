import { Component } from 'react';
import { Header, SearchButton, SearchButtonLabel, SearchForm, SearchInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  hendleSearchQuery = evt => {
    this.setState({searchQuery: evt.currentTarget.value.toLowerCase()})
  }

  hendleSubmit = evt => {
    evt.preventDefault()
    if(this.state.searchQuery.trim() === "") {
      alert("Введите запрос")
      return
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({searchQuery: ""})
  }

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.hendleSubmit}>
          <SearchButton type="submit" className="button">
            <SearchButtonLabel className="button-label">Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            value={this.state.searchQuery}
            onChange={this.hendleSearchQuery}
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
