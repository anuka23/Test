import React from 'react'
import { SelectionWidget } from './SelectionWidget'
import styled from 'styled-components'

const Style = styled.div`
    width: 100%;
    height: 100vh;
`

export const Problem1 = () => {
  return (
    <Style>
        <SelectionWidget/>
    </Style>
  )
}
