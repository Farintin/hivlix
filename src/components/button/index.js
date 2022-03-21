import React from 'react'

import './button.css'
import style from './button.module.css'



function Button(props) {

    return (
        <a className={`button ${style.button}`} href={props.link}>
            {props.children}
        </a>
    )
}



export default Button