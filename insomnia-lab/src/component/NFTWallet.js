import { Button } from "react-bootstrap"
import { useState } from "react"


const Wallet = () => {

    const [walletAddress, setwalletAddress] = useState(null)

    const connectWallet = async () => {
        
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
            
            setwalletAddress(accounts[0])
            console.log(walletAddress)
        }
    }

    return (
        <>
            <div>Account:{walletAddress}</div>
            <Button onClick={connectWallet}>Connect Wallet</Button>
        </>
    )
}

export default Wallet