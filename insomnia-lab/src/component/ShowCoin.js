import {useState, useEffect} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import ShowDetail from './ShowDetail'

const ShowCoin = () => {
    const [dataAPI, setDataAPI] = useState()
    const getAPIData = () => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => setDataAPI(res.data))
        .catch(err => console.log(err))
    }
    
    useEffect (()=>{
        getAPIData()
        
        const interval = setInterval(() => {
            getAPIData()
            console.log(dataAPI)
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
                    
                </>
                )
            }      

}

export default ShowCoin