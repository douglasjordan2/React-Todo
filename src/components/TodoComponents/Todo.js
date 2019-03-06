import React, { Component } from 'react'

export default 
class extends Component {
  containerStyles = (isActive, position, isComplete) => {
    return ({
      display: 'flex',
      justifyContent: 'space-between',
      width: isComplete ? '50%' : '95%',
      padding: isComplete ? '0' : '20px 5px',
      border: '1px solid black',
      opacity: isActive ? '1' : '0',
      marginTop: isActive ? '0' : '20px',
      marginBottom: '1%',
      transition: `all 1s ease-out ${position / 5}s`,
      background: '#6abed8'
    });
  }

  h1Styles = isComplete => {
    return ({
      paddingLeft: '1%',
      opacity: isComplete ? '0.7' : '1',
      transition: 'all 1s ease-out'
    });
  }

  render() {
    const { title, id, complete, position } = this.props.todo;
    return (
      <div style = { this.containerStyles(this.props.activeTab, position, complete) }>
        <h1 style = { this.h1Styles(complete) }>{ title }</h1>
        <input 
          type="checkbox"
          onChange = { () => this.props.markComplete(id) }
          style = {{ cursor: 'pointer' }}
        />
      </div>
    )
  }
}