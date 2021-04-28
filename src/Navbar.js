import React from "react"
import { NavbarWrapper } from "./styles/NavbarStyles"

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="/">Home</a>
      <a href="/idlist">ID List</a>
      <a href="/streamcfg">Stream Cfg</a>
      <a href="/streamctl">Stream Ctl</a>
    </NavbarWrapper>
  )
}

export default Navbar