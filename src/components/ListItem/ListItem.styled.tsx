import styled from 'styled-components'

type editModeType = {
  editMode: boolean
}

export const ItemWrapper = styled.li``

export const Checkbox = styled.input``

export const ItemText = styled.span<editModeType>`
  display: ${p => (p.editMode ? 'none' : 'block')};
`

export const EditButton = styled.button``

export const DeleteButton = styled.button``

export const EditModeInput = styled.input<editModeType>`
  display: ${p => (p.editMode ? 'block' : 'none')};
`
