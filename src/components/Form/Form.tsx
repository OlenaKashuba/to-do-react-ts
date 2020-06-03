import * as React from 'react'
import { FormWrapper } from './Form.styled'

type propTypes = {
  onFormSubmit: (inputValue: string) => void
}

function Form({ onFormSubmit }: propTypes) {
  const [inputValue, setInputValue] = React.useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!inputValue.trim()) return
    onFormSubmit(inputValue)
    setInputValue('')
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="to-do-input">Add To Do</label>
        <input
          type="text"
          name="to-do-input"
          id="to-do-input"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button>Add</button>
      </FormWrapper>
    </>
  )
}

export default Form
