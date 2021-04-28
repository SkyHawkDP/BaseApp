import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: turquiose;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: #c0c0c0;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
`