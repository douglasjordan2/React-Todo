import React from 'react';

import './index.css';
import DailyTab from './components/Timeframes/Daily/Tab';
import MonthlyTab from './components/Timeframes/Monthly/Tab';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    // true = daily, false = monthly
    activeTab: true,
    dailyTodos: dailyTodos,
    monthlyTodos: monthlyTodos,
    title: '',
    id: '',
    complete: false
  }

  changeActive = () => {
    this.setState({ activeTab: !this.state.activeTab })
  }

  addTodo = event => {
    event.preventDefault();
    let newTodo = {
      title: this.state.title,
      id: this.state.activeTab ? this.state.dailyTodos.length : this.state.monthlyTodos.length
    }
    if(this.state.activeTab) {
      this.setState(prevState => { 
        return {
          dailyTodos: [...prevState.dailyTodos, newTodo],
          title: '',
          id: '',
          complete: false
        }
      })
    } else {
      this.setState(prevState => { 
        return {
          monthlyTodos: [...prevState.monthlyTodos, newTodo],
          title: '',
          id: '',
          complete: false
        }
      })
    }
  }

  clearAll = () => {
    if(this.state.activeTab) {
      this.setState({ dailyTodos: [] })
    } else {
      this.setState({ monthlyTodos: [] })
    }
  }

  markComplete = id => {
    if(this.state.activeTab) {
      this.setState({ dailyTodos: this.state.dailyTodos.map(a => {
        if(a.id == id) {
          a.complete = !a.complete;
        }
        return a;
      }) })
    } else {
      this.setState({ monthlyTodos: this.state.monthlyTodos.map(a => {
        if(a.id == id) {
          a.complete = !a.complete;
        }
        return a;
      }) })
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div style = { container }>
        <h1 style = { h1 }>todo:</h1>
        <div style = { tabContainer }>
          <DailyTab 
            activeTab = {this.state.activeTab}
            changeActive = { this.changeActive }
            todos = { this.state.dailyTodos }
            markComplete = { this.markComplete }
          />
          <MonthlyTab 
            activeTab = {this.state.activeTab}
            changeActive = { this.changeActive }
            todos = { this.state.monthlyTodos }
            markComplete = { this.markComplete }
          />
        </div>
        <TodoForm 
          activeTab = { this.state.activeTab }
          addTodo = { this.addTodo }
          handleChange = { this.handleChange }
          title = { this.state.title }
          clearAll = { this.clearAll }
        />
      </div>
    );
  }
}

const dailyTodos = [
  {
    title: 'work',
    id: 1,
    complete: false
  },
  {
    title: 'finish styling this project',
    id: 2,
    complete: false
  },
  {
    title: 'class',
    id: 3,
    complete: false
  }
]

const monthlyTodos = [
  {
    title: 'give this todo app a responsive design',
    id: 1,
    complete: false
  },
  {
    title: 'refactor these tabs into one component',
    id: 2,
    complete: false
  },
  {
    title: 'create a button to make additional tabs',
    id: 3,
    complete: false
  }
]

const container = {
  height: '500px',
  width: '400px',
  border: '1px solid black',
  margin: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0',
  background: '#181712',
  color: 'white'
}

const h1 = {
  fontSize: '1.5rem',
  margin: '3%',
  fontStyle: 'italic'
}

const tabContainer = {
  height: '80%',
  position: 'relative'
}

export default App;
