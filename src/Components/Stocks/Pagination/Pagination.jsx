import React from 'react';
import style from './Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight, faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    debugger;
    return (
        <div className={style.container}>
            <div className={style.pagination} onClick={() => {}}><FontAwesomeIcon icon={faSquareCaretLeft}/> PERV</div>
            <div className={style.pagination} onClick={() => {}}>NEXT <FontAwesomeIcon icon={faSquareCaretRight}/></div>
        </div>
    )
}

export default Pagination;