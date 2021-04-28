import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/'
//import sfinit from '../../superFluid/sftest'
const sftest  = require('../../superFluid/sftest');
//const sfinit = sftest.sfinit()
const getAccount = sftest.getAccount()

const IDList: React.FC = () => {
  const [open, setOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let sf
    let account
    const handleClick = () => {
      console.log("Clicked")
      sftest.sfinit() // Init Superfluid
      console.log("After init")
      account = sftest.getAccount()
      console.log(account)
    }
      return (
        <body>
        <StyledButton> 
          IDClient
          <Button  size="md" text="Connect" onClick={handleClick} />
        </StyledButton>
        </body>
      )
}

const StyledButton = styled.div`
align-items: center;
width: 50;
`
export default IDList