import React from 'react'
import Form from './components/Form/Form'
import ListItem from './components/ListItem/ListItem'

type todoType = Array<string>

function App() {
  const [todo, setToDo] = React.useState<todoType>([])

  function handleSubmit(inputValue: string) {
    setToDo([...todo, inputValue])
  }

  function renderTodoItem(todo: todoType) {
    if (todo.length < 1) return
    return todo.map(item => {
      return <ListItem>{item}</ListItem>
    })
  }

  console.log(todo)

  return (
    <div className="App">
      <Form onFormSubmit={handleSubmit} />
      <ul>{renderTodoItem(todo)}</ul>
    </div>
  )
}

export default App
