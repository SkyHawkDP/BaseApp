import React, { useState } from "react"
import { HeaderWrapper } from "./styles/HeaderStyles"
import Navbar from "./Navbar"
import MenuButton from "./MenuButton"

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper>
      <h3>Adept Camp</h3>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  )
}

export default Header