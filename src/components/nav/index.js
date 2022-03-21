import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './nav.module.css'



function Nav(props) {
    const menuLinks = props.links

    let active = ({ isActive }) => {
        let className = `${style.menu_item}`
        className = isActive ? className+=` ${style.active}` : className
        return className
    }

    return <nav className={style.menu}>
            {menuLinks.map((menuLink, i) => {
                return <NavLink key={i} to={menuLink.link} className={active}>{menuLink.name}</NavLink>
            })}
        </nav>
}



export default Nav