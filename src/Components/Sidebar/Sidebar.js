import React from 'react'
import { Container, Content } from './Style.jsx'
import { TbCoinBitcoin } from "react-icons/tb"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { BsWallet2, BsGraphUpArrow, BsShieldLock, BsNewspaper } from "react-icons/bs"
import { TbCoins } from "react-icons/tb";
import { MdBalance } from "react-icons/md"
import { RxExit } from "react-icons/rx"
import { FaTimes } from "react-icons/fa"


import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={TbCoinBitcoin} Text='O que são criptomoedas?' />
        <SidebarItem Icon={AiOutlineQuestionCircle} Text="Para que elas servem?" />
        <SidebarItem Icon={BsWallet2} Text="Como posso obte-lás?" />
        <SidebarItem Icon={BsShieldLock} Text="Elas são seguras?" />
        <SidebarItem Icon={TbCoins} Text="Quantas existem" />
        <SidebarItem Icon={MdBalance} Text="Quais direitos eu possuo?" />
        <SidebarItem Icon={BsGraphUpArrow} Text="Como investir?" />
        <SidebarItem Icon={BsNewspaper} Text="Notícias" />
        <SidebarItem Icon={RxExit} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar