import React, { Component } from 'react'

export default 
class TodoForm extends Component {
  render() { console.log()
    return (
      <div>
        <span style = { formHeader }>
          {`What do we need to complete ${ this.props.activeTab ? 'today' : 'this month' }?`}
        </span>
        <form 
          onSubmit = { this.props.addTodo }
          style = { form }
        >
          <div style = { addTodo } >
            <input 
              name = "title"
              value = { this.props.title }
              placeholder = "Title"
              onChange = { this.props.handleChange }
              style = { inputText }
            />
          </div>
          <div style = { buttonsContainer }>
            <button 
              type="submit"
              style = { submit }
            >
              Add Item
            </button>
            <button
              type="button"
              onClick = { this.props.clear }
              style = { submit }
            >
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const formHeader = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
  marginLeft: '2%',
  paddingBottom: '20px'
}

const form = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '1%'
}

const addTodo = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}

const inputText = {
  width: '90%',
  padding: '10px',
  marginBottom: '1%'
}

const buttonsContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2%'
}

const submit = {
  padding: '10px',
  width: '48%',
  fontSize: '1.2rem',
  cursor: 'pointer',
  backgroundColor: 'white'
}