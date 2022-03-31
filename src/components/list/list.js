import React from 'react'

import style from './list.module.css'



function List(props) {
    const listData = props.listData
    const newClassName = props.addClassName;

    return (
        <ul className={`${style.list}`}>
            {listData.map((data, i) => {
                return <li key={i} className={`${style.item} fs-70p ${newClassName}`}>{data}</li>
            })}
        </ul>
    )
}



export default List