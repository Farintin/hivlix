import React from "react"

import style from './list_table.module.css'



function ListTable(props) {
    const listData = props.list

    return (
        <div className={style.list_table}>
            {listData.map((row, i) => {
                return (
                    <div key={i} className={style.row}>
                        <div className={`${style.heading}`}>
                            <p className={style.text}>{row.heading}<span>:</span></p>
                        </div>
                        <div className={`${style.body}`}>
                            <p className={style.text}>{row.body}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}



export default ListTable