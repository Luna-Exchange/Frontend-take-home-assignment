import  {Accordion}  from "react-bootstrap"

const ShowDetail = (prop) => {
    console.log(prop.data)
    const {data} = prop
    return (
        <>
            <h3>{data.chartName}</h3>
            <h3>{data.time.updated}</h3>
            <Accordion defaultActiveKey={['0','1','2']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4>{data.bpi.USD.code}</h4></Accordion.Header>
                    <Accordion.Body>
                    Rate: {data.bpi.USD.rate} <br />
                    Symbol: {data.bpi.USD.symbol} <br />
                    Description: {data.bpi.USD.description}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>{data.bpi.GBP.code}</h4></Accordion.Header>
                    <Accordion.Body>
                    Rate: {data.bpi.GBP.rate} <br />
                    Symbol: {data.bpi.GBP.symbol} <br />
                    Description: {data.bpi.GBP.description}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>{data.bpi.EUR.code}</h4></Accordion.Header>
                    <Accordion.Body>
                    Rate: {data.bpi.EUR.rate} <br />
                    Symbol: {data.bpi.EUR.symbol} <br />
                    Description: {data.bpi.EUR.description}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default ShowDetail