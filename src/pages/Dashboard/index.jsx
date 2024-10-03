import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { getUserDetails } from "../../api/github";

import { Container, Content } from './styles'



export const Dashboard = () => {
  const[username, setUserName] =useState('')
  const[loading, setLoading] = useState(false)

  function handleSetUser(event) {
    setUserName(event.target.value)
  }

  async function handleGetDetails() {
    try{
      const result = await getUserDetails(username)
      console.log(result)
    }catch (error) {
      console.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <Container>
      <Content>
        <label htmlfor="nickname">
          <h1 class="title">Digite o usuário GIT</h1>
        <input id="nickname" type="text" placeholder="Digite aqui seu usuário" onChange = {handleSetUser}/>
        </label>

        <button>Buscar <FaSearch /></button>
      </Content>
    </Container>
  )
}