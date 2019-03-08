import React, { Component } from 'react';
import TodoList from '../../TodoComponents/TodoList';

export default 
class Tab extends Component {

  listContainer = () => {
    return ({
      position: 'absolute',
      top: '12%',
      opacity: this.props.activeTab ? '1' : '0',
      transition: 'opacity 1s ease-out',
      height: '100%',
      width: '100%',
      marginLeft: '1%',
      zIndex: this.props.activeTab ? '1' : '0'
    })
  }

  tabStyles = () => {
    return ({
      background: this.props.activeTab ? '#757571' : '#b0aba0',
      border: '1px solid black',
      padding: '10px 20px',
      position: 'absolute',
      top: '0',
      left: '1%',
      opacity: this.props.activeTab ? '1' : '0.5',
      cursor: 'pointer',
    });
  }

  render() {
    return (
      <div style = { container }>
        <span 
          style = { this.tabStyles() }
          onClick = { this.props.activeTab ? null : () => this.props.changeActive() }
        >
          Daily
        </span>
        <div style = { this.listContainer() }>
          <TodoList 
            todos = { this.props.todos }
            activeTab = { this.props.activeTab }
            markComplete = { this.props.markComplete }
          />
        </div>
      </div>
    )
  }
}

const container = {
  marginTop: '10%',
}