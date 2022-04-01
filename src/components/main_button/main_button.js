import React from 'react'

import style from './main_button.module.css'



function MainButton(props) {

    return (
        <a className={`${style.button}`} href={props.link}>
            {props.text}
        </a>
    )
}



export default MainButton