import * as React from 'react'

function Form() {
  return (
    <form>
      <label htmlFor="to-do-input">Add To Do</label>
      <input type="text" name="to-do-input" id="to-do-input" />
    </form>
  )
}

export default Form
