import React from 'react'

import Title from '../Title/Title'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Column,
  Columns,
  Container,
  FigureEighth,
  FigureFives,
  FigureFourt,
  FigureOne,
  FigureSevent,
  FigureSixes,
  FigureTheerd,
  Round,
  Triangle
} from './styles'

const PlayroomItem = () => {
  return (
    <Container>
      <Title text="PLAYROOM" />
      <Round />
      <ArrowRight />
      <FigureTheerd />
      <Columns>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </Columns>
      <FigureFourt />
      {/* <Triangle>
        <ArrowUp />
        <ArrowDown />
        <ArrowLeft />
      </Triangle> */}
      {/* <FigureFives /> */}
      {/* <FigureSixes /> */}
      {/* <FigureSevent /> */}
      {/* <FigureEighth /> */}
    </Container>
  )
}

export default PlayroomItem
