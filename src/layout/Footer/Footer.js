import React from 'react'

import './Footer.css'
import style from './Footer.module.css'

import Logo from '../../components/logo/logo'

import TwitterIcon from '../../components/icons/twitter'
import LinkedinIcon from '../../components/icons/linkedin'
import FacebookIcon from '../../components/icons/facebook'
import InstagramIcon from '../../components/icons/instagram'



function Footer() {

    return (
        <footer className={style.footer}>
            
            <div className={`${style.pad_l}`}>
            </div>

            <div className={`${style.row1_col1}`}>
                <Logo/>
                <p className={`${style.paraf} mt-16`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed placerat diam vel lectus viverra, vel placerat nisi tristique. 
                    Sed ligula metus, mattis sit amet mattis vitae, rutrum ut lorem.
                </p>
            </div>
            <div className={`${style.row1_col1_pad_r}`}>
            </div>
            <div className={`${style.row1_col2_pad_l}`}>
            </div>
            <div className={`${style.row1_col2}`}>
            
                <div className={style.block}>
                    <p className={style.heading}>offices</p>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <p className={style.text}>Sydney -<br/>
                            6 Rip Curl Avenue CA 90731</p>
                        </li>
                        <li className={style.item}>
                            <p className={style.text}>New York -<br/>
                            20 Maple Avenue LR 47382</p>
                        </li>
                    </ul>
                </div>
                
                <div className={`${style.block}`}>
                    <p className={style.heading}>contact us</p>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <p className={style.text}>agency@gmail.com<br/>
                            +1 900 577 473 84</p>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={`${style.row2_col1}`}>
                <p className={`${style.copyright}`}>All right reserved. &copy;2022 Hivlix</p>
            </div>
            <div className={`${style.row2_col2} ${style.social_icons} social_icons`}>

                <a href="#">
                    <TwitterIcon/>
                </a>
                <a href="#">
                    <LinkedinIcon/>
                </a>
                <a href="#">
                    <FacebookIcon/>
                </a>
                <a href="#">
                    <InstagramIcon/>
                </a>

            </div>
            <div className={`${style.row2_col3}`}>
            </div>
            
            <div className={`${style.pad_r}`}>
            </div>

        </footer>
    )
}



export default Footer