import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShowDetail from './ShowDetail'
import './ShowCoin.css'

const ShowCoin = () => {
    const [dataAPI, setDataAPI] = useState(null)

    const getAPIData = () => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => setDataAPI(res.data))
        .catch(err => console.log(err))
    }
    
    useEffect (()=>{
        getAPIData()
        
        const interval = setInterval(() => {
            getAPIData()
            }, 5000);
            return () => clearInterval(interval);
    },[])

    useEffect(()=> {
        getAPIData()
    },[])

    if (!dataAPI) {
        return ( 
            <h3>Loading...</h3>
        )
    } else {
        return (
            <>  
                <ShowDetail data={dataAPI}/>
                <br />
                <Button className='btn btn-primary btn-lg'>
                    <Link to="/wallet">NFT Wallet</Link>
                </Button>
            </>
            )
        }      

}

export default ShowCoin