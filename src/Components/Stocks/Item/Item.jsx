import React from 'react';
import style from './Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.iname}>
                {props.item.companyName}
            </div>
            <div className={style.iprice}>
                <div className={style.symbol}>{props.item.symbol}</div>
                <div className={style.price}>
                    {props.item.latestPrice}
                    {(props.item.currency === 'USD') &&
                        <FontAwesomeIcon icon={faDollarSign} />
                    }
                </div>
                <div className={style.change}>
                    <div className={(props.item.change < 0) ? style.minus : style.plus}>
                        {(props.item.change < 0) ? 
                            (
                                <FontAwesomeIcon icon={faCaretDown}/>
                            ) : (
                                <FontAwesomeIcon icon={faCaretUp}/>)}
                            {Math.abs(props.item.change)}
                    </div>
                    <div className={(props.item.changePercent < 0) ? style.minus : style.plus }>
                        {(props.item.changePercent < 0) ? 
                            (
                                <FontAwesomeIcon icon={faCaretDown}/>
                            ) : (
                                <FontAwesomeIcon icon={faCaretUp}/>)}
                            {Math.abs(props.item.changePercent)} %
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item