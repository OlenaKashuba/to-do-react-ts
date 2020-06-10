import * as React from 'react'
import {
  ItemWrapper,
  Checkbox,
  ItemText,
  EditButton,
  DeleteButton,
  EditModeInput
} from './ListItem.styled'

type propTypes = {
  id: number
  text: string
  handleDelete: (id: number) => void
  handleComplete: (id: number) => void
}

function ListItem({ id, text, handleDelete, handleComplete }: propTypes) {
  const [editMode, setEditMode] = React.useState(false)

  return (
    <ItemWrapper>
      <Checkbox type="checkbox" onClick={() => handleComplete(id)}></Checkbox>
      <ItemText editMode={editMode}>{text}</ItemText>
      <EditModeInput editMode={editMode} />
      <EditButton onClick={() => setEditMode(!editMode)}>Edit</EditButton>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </ItemWrapper>
  )
}

export default ListItem
