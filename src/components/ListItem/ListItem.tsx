import * as React from 'react'
import {
  ItemWrapper,
  ItemText,
  EditButton,
  DeleteButton
} from './ListItem.styled'

type propTypes = {
  id: number
  text: string
  handleDelete: (id: number) => void
}

function ListItem({ id, text, handleDelete }: propTypes) {
  return (
    <ItemWrapper>
      <ItemText>{text}</ItemText>
      <EditButton>Edit</EditButton>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </ItemWrapper>
  )
}

export default ListItem
