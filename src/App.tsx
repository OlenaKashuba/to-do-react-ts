import React from 'react'
import Form from './components/Form/Form'
import ListItem from './components/ListItem/ListItem'

let idCounter = 0

type todoType = {
  id: number
  text: string
  completed: boolean
}

type todosType = Array<todoType>

function App() {
  const [todos, setToDo] = React.useState<todosType>([])

  function handleSubmit(inputValue: string) {
    setToDo([
      ...todos,
      { id: idCounter += 1, text: inputValue, completed: false }
    ])
  }

  function renderTodoItem(todos: todosType) {
    if (todos.length < 1) return
    return todos.map(todo => {
      return <ListItem id={todo.id} text={todo.text} />
    })
  }

  console.log(todos)

  return (
    <div className="App">
      <Form onFormSubmit={handleSubmit} />
      <ul>{renderTodoItem(todos)}</ul>
    </div>
  )
}

export default App
