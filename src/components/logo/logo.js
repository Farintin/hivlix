import React from 'react'
import { Link } from 'react-router-dom'

import style from './logo.module.css'



function Header({ color }) {

    return (
        <Link to="/" className={`${style.logo} logo`}>
            <p 
                className={`${style.text} text`}
                style={{
                    color: color
                }}>HIVLIX</p>
        </Link>
    )
}



export default Header