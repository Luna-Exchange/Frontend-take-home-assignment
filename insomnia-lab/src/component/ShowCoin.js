import {useState, useEffect} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'

const ShowCoin = () => {
    const [dataAPI, setDataAPI] = useState()
    useEffect (()=>{
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => setDataAPI(res.data))
            .catch(error => console.log(error))
    },[])
    
    // console.log(dataAPI.bpi.USD.code)

    if (!dataAPI) {
        return ( 
            <h3>Loading...</h3>
        )
    } else {
            return (
                <>  
                    
                    <Card style={{ width: '80%', margin: 0, border: 1px }}>
                        <Card.Header ><h5>{ dataAPI.chartName }</h5></Card.Header>
                        <Card.Body>
                        <Card.Text >
                            Time: {dataAPI.time.updated}
                        </Card.Text>
                        <Card.Text>
                            Code: {dataAPI.bpi.USD.code}
                        </Card.Text>
                        <Card.Text>
                            Symbol: {dataAPI.bpi.USD.symbol}
                        </Card.Text>
                        <Card.Text>
                            Rate: {dataAPI.bpi.USD.rate}
                        </Card.Text>
                        <Card.Text>
                            Description: {dataAPI.bpi.USD.description}
                        </Card.Text>
                        {/* <Card.Text>
                            GBP: {dataAPI.bpi.GBP}
                        </Card.Text>
                        <Card.Text>
                            EUR: {dataAPI.bpi.EUR}
                        </Card.Text> */}
                        </Card.Body>
                    </Card>
                    
                </>
                )
            }
        
       
    

    // return (
    //     <>

      
    //     </>
    // )
    
}

export default ShowCoin