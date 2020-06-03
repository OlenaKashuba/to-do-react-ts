import * as React from 'react'
import { ItemWrapper } from './ListItem.styled'

type propTypes = {
  children: React.ReactNode
}

function ListItem({ children }: propTypes) {
  return <ItemWrapper>{children}</ItemWrapper>
}

export default ListItem
