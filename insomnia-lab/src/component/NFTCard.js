import { Card } from "react-bootstrap"


const NFTCard = (prop) => {
    const { nft } = prop
    console.log(nft)
    return (
        <>
            <Card style={{ display: 'flex', width: '50%', height: '500px'}}>
            <p>{nft.id}</p>
            <p>{nft.collection}</p>
            {/* <p>{nft.meta.name}</p> */}
            {/* <p>{nft.meta.description}</p> */}
            </Card>
        </>
    )    
}

export default NFTCard