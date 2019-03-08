import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <input 
        name="search"
        value = { this.props.search }
        type="text"
        onChange = { this.props.handleChange }
        style = {{ 
          marginRight: '2%' ,
          borderRadius: '5px'
        }}
      />
    )
  }
}
