import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props
    return (
      todos.map(todo => (
        <Todo 
          key = { this.id }
          todo = { todo }
          activeTab = { this.props.activeTab }
          markComplete = { this.props.markComplete }
        />
      ))
    )
  }
}
