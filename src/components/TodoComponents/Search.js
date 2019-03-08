import React, { Component } from 'react';

import SearchBar from './SearchBar';

export default 
class Search extends Component {
  render() {
    return (
      <div style = {{
        display: 'flex',
        position: 'absolute',
        top: '11.5%',
        right: '5%',
        marginLeft: '2%',
        zIndex: '1'
      }}>
        <SearchBar 
          handleChange = { this.props.handleChange }
          search = { this.props.searchVal }
        />
        <button
          onClick = { () => this.props.search() }
        >
          Search
        </button>
      </div>
    )
  }
}
