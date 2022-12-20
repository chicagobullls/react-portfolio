import React from 'react'

import { Text } from './styles'

type TitleType = {
  text: string
}

const Title = ({ text }: TitleType) => {
  return <Text>{text}</Text>
}

export default Title
