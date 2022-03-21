import React from 'react'

import style from './Header.module.css'

import Logo from '../../components/logo/logo'
import Nav from '../../components/nav'
import MailIcon from '../../components/icons/mail'
import Button from '../../components/button'

import { menuLinks } from '../../data/menu'



function Header() {

    return (
        <header 
            className={style.header}
            style={{
                position: "absolute",
                width: "100%",
                zIndex: 2
            }}>
            <div className={style.wrapper}>

                <Logo/>

                <Nav links={menuLinks} />
                
                <Button link='mailto:hivlixhere@gmail.com'>
                    <MailIcon addClassName={`color`}/>
                    <p className={`text color`}>hivlixhere@gmail.com</p>
                </Button>

            </div>
        </header>
    )
}



export default Header