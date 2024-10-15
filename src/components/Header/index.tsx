import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import dtmoneylogo from '../../assets/logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtmoneylogo} alt="" />   

        <NewTransactionButton>Nova transação</NewTransactionButton>   
      </HeaderContent>
    </HeaderContainer>
  )
}