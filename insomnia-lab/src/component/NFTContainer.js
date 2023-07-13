import { Card } from "react-bootstrap"
import NFTCard from "./NFTCard"

const NFTContainer = (prop) => {
    const { NFTData } = prop
    
    
    if (!NFTData) {
        return ( 
            <h3>Loading...</h3>
        )
    } else {
        console.log(NFTData)
        return (
            <div>
                {NFTData.items.map((nft, index) => {
                    return (
                        <NFTCard nft={nft} key={index}/>
                    )
                })}
               
            </div>
        )
    }

        
}

export default NFTContainer