import React from 'react'

import Item from './Item/Item'
import PlayroomItem from './PlayroomCard/PlayroomCard'
import { Container } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Item title="test" />
      <Item title="test" />
      <PlayroomItem />
      <Item title="Coockbook" />
      <Item title="My profile" />
    </Container>
  )
}

export default Navbar
