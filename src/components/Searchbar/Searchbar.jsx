import { Component } from 'react';
import { Header, SearchButton, SearchForm, SearchInput } from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi'
import toast from 'react-hot-toast';

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
      toast.error("Please enter a request")
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
            <BiSearch size={20}/>
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
