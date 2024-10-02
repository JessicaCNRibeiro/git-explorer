import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { Container, Content } from './styles'

export const Dashboard = () => {
  const [par1, setPar1] = useState(0)
  return (
    <Container>
      <Content>
        <input type="text" />

        <button>Buscar <FaSearch /></button>
      </Content>
    </Container>
  )
}