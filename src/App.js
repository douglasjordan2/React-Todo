import React from 'react';
import uuid from 'uuid';

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
    complete: false,
    position: ''
  }

  changeActive = () => {
    this.setState({ activeTab: !this.state.activeTab })
  }

  addTodo = event => {
    event.preventDefault();
    let newTodo = {
      title: this.state.title,
      id: uuid.v4(),
      position: this.activeTab ? this.state.dailyTodos.length : this.state.monthlyTodos.length
    }
    if(this.state.activeTab) {
      this.setState(prevState => { 
        return {
          dailyTodos: [...prevState.dailyTodos, newTodo],
          title: '',
          id: '',
          complete: false,
          position: ''
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

  clear = () => {
    if(this.state.activeTab) {
      this.setState({ dailyTodos: [...dailyTodos.filter(a => {
        if(!a.complete) {
          return a;
        }
      })] })
    } else {
      this.setState({ monthlyTodos: [...monthlyTodos.filter(a => {
        if(!a.complete) {
          return a;
        }
      })] })
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
    console.log(this.state.dailyTodos)
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
          clear = { this.clear }
        />
      </div>
    );
  }
}

const dailyTodos = [
  {
    title: 'work',
    id: uuid.v4(),
    complete: false,
    position: 1
  },
  {
    title: 'finish styling this project',
    id: uuid.v4(),
    complete: false,
    position: 2
  },
  {
    title: 'class',
    id: uuid.v4(),
    complete: false,
    position: 3
  }
]

const monthlyTodos = [
  {
    title: 'give this todo app a responsive design',
    id: uuid.v4(),
    complete: false,
    position: 1
  },
  {
    title: 'refactor these tabs into one component',
    id: uuid.v4(),
    complete: false,
    position: 2
  },
  {
    title: 'create a button to make additional tabs',
    id: uuid.v4(),
    complete: false,
    position: 3
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
