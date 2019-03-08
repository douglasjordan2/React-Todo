import React, { Component } from 'react'

export default 
class extends Component {
  containerStyles = (isActive, position, isComplete) => {
    return ({
      display: 'flex',
      justifyContent: 'space-between',
      padding: isComplete ? '0' : '20px 5px',
      border: '1px solid black',
      opacity: isActive ? '1' : '0',
      marginTop: isActive ? '0' : '20px',
      marginBottom: '1%',
      transition: isComplete ? `all 1s ease-out` : `margin-top 1s ease-out ${position / 5}s, opacity 1s ease-out ${position / 3}s`,
      background: '#6abed8',
      cursor: 'pointer',
      width: '95%'
    });
  }

  h1Styles = isComplete => {
    return ({
      paddingLeft: '1%',
      opacity: isComplete ? '0.3' : '1',
      textDecoration: isComplete ? 'line-through' : 'none',
      transition: isComplete ? 'all 1s ease-out' : 'none',
      fontSize: isComplete ? '0.8rem' : '1.5rem'
    });
  }

  render() {
    const { title, id, position, complete } = this.props.todo;
    return (
      <div 
        style = { this.containerStyles(this.props.activeTab, position, complete) }
        onClick = { () => this.props.markComplete(id) }
      >
        <h1 style = { this.h1Styles(complete) }>{ title }</h1>
      </div>
    )
  }
}