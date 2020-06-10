import React from 'react'
import Form from './components/Form/Form'
import ListItem from './components/ListItem/ListItem'
import { AppWrapper } from './components/App.styled'
import { ListWrapper } from './components/List.styled'

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

  function handleDelete(id: number) {
    setToDo(todos.filter(todo => todo.id !== id))
  }

  function handleComplete(id: number) {
    const indexToComplete = todos.findIndex(todo => todo.id === id)
    const newToDos = [...todos]
    newToDos[indexToComplete].completed = !todos[indexToComplete].completed
    setToDo(newToDos)
  }

  function renderTodoItem(todos: todosType) {
    if (todos.length < 1) return
    return todos.map(todo => {
      return (
        <ListItem
          id={todo.id}
          text={todo.text}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      )
    })
  }

  console.log(todos)

  return (
    <AppWrapper>
      <Form onFormSubmit={handleSubmit} />
      <ListWrapper>{renderTodoItem(todos)}</ListWrapper>
    </AppWrapper>
  )
}

export default App
