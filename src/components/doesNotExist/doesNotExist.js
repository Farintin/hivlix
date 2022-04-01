import React from 'react'

import style from './doesNotExistStyle'


function DoesNotExist(props) {

    return (
        <section style={style.section}>
            <p style={style.text}>{props.text}</p>
        </section>
    )
}



export default DoesNotExist