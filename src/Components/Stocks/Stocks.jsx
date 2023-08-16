import React from 'react';
import style from './Stocks.module.css';
import { useEffect } from 'react';
import Item from './Item/Item';
import PaginationContainer from './Pagination/PaginationContainer';


const Stocks = (props) => {

    useEffect(() => {
        props.fetchStocks()
    }, [])

    return props.stocksList.loading?(
        <h1 className={style.loader}>Loading</h1>
    ):props.stocksList.error?(
        <h2>{props.stocksList.error}</h2>
    ):(<div>
            <div className={style.container}>
                {props.stocksList.data.map(item => 
                    <Item key={item.symbol} item={item}/>
                 )}
            </div>
            <PaginationContainer />
        </div>
        
    )
}

export default Stocks;