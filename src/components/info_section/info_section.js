import React from "react"

import style from './info_section.module.css'

import MainButton from '../main_button/main_button'



function InfoSection(props) {
    const blocks = props.blocks

    return (
        <section className={style.info_section}>
            {blocks.map((block, i) => {
                return (
                    <article key={i} className={style.info_block}>
                        <div className={style.wrapper}>

                            <picture className={style.picture}>
                                <img src={block.image} className={style.image} alt={block.heading}/>
                            </picture>
                            
                            <div className={style.info}>
                                <div className={style.content}>
                                    <p className={style.heading}>{block.heading}</p>
                                    <p className={style.paraf}>{block.body}</p>
                                    <MainButton text="view more" href={block.link}/>
                                </div>
                            </div>

                        </div>
                    </article>
                )
            })}
        </section>
    )
}



export default InfoSection