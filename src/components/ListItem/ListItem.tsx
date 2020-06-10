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
}

function ListItem({ id, text }: propTypes) {
  return (
    <ItemWrapper>
      <ItemText>{text}</ItemText>
      <EditButton>Edit</EditButton>
      <DeleteButton>Delete</DeleteButton>
    </ItemWrapper>
  )
}

export default ListItem
