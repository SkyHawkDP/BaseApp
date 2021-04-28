import React, { useCallback } from 'react'
import { ethers, utils } from "ethers";
import styled from 'styled-components'
import  useWallet from '../Wallet/usewallet'
//import useModal from '../../../hooks/useModal'
import Button from './Button'
//import WalletProviderModal from '../../WalletProviderModal'
//import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const provider = useWallet().provider
  const signer = useWallet()
  let account = ""

  const handleUnlockClick = useCallback(() => {
    account = "1"
  }, [account])

  const onPresentAccountModal =  () => {
    account = "2"
  }

  return (
    <StyledAccountButton>
      {!account ? (
        <Button onClick={handleUnlockClick} size="sm" text="Unlock Wallet" background="white"/>
      ) : (
        <Button onClick={onPresentAccountModal} size="sm" text="My Wallet" background="white"/>
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div`
`

export default AccountButton