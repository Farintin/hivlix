import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import style from './carousel.module.css'
import './carousel.css'

import TwitterIcon from '../icons/twitter'
import LinkedinIcon from '../icons/linkedin'
import LocationIcon from '../icons/location'

import Button from '../button/'
import List from '../list/'
import BlockContent from '../carousel_slide_block/carousel_slide_block_content';

import { slides } from '../../data/slides'



const address = [
    'Street: 29 Cambridge Road.',
    'City: North Cerney.'
]
const addressMapLink = 'https://www.google.com/maps/search/cambridge,+north+cerney/@51.7701277,-1.9766014,16z/data=!3m1!4b1'

function Carousel() {
    const [index, setIndex] = useState(0)
    const [pinned, setPinned] = useState(false)
    const ref = useRef(null)
        
    const nSlides = slides.length
    const indexString = String(index + 1).padStart(2, '0')
    
    let autoPlay
    function resetAutoPlay() {
        window.clearTimeout(autoPlay)
    }
    function pinHandler() {
        if (!pinned) {
            resetAutoPlay()
            setPinned(true)
        } else {
            autoPlay = window.setTimeout(function () {
                setIndex(index === nSlides - 1 ? 0 : index + 1)
            }, 5000)
            setPinned(false)
        }
    }
    function dotClickHandler(i) {
        resetAutoPlay()
        if (i === index) {
            if (!pinned) {
                autoPlay = window.setTimeout(function () {
                    setIndex(index === nSlides - 1 ? 0 : index + 1)
                }, 5000)
            }
        } else {
            setIndex(i)
        }
    }
    useEffect(() => {
        /*window.onscroll = function() {
            console.log(0, window.scrollY)
            window.scrollTo(0, window.scrollY)
        }*/
        if (!pinned) {
            autoPlay = window.setTimeout(function () {
                setIndex(index === nSlides - 1 ? 0 : index + 1)
            }, 5000)
        }

        //console.log(index, autoPlay)
    }, [index])

    function scrollDown() {
        //console.log("width", ref.current.offsetHeight)
        window.scrollBy(0, ref.current.offsetHeight)
    }
    return (
        <div ref={ref} className={`${style.carousel} carousel`}>

            <div className={style.bg_images}>
                <AnimatePresence 
                    initial={false}
                    exitBeforeEnter={false}
                >
                    {slides.map((slide, i) => {
                        let content = null
                        if (i === index) {
                            content = <motion.img 
                                        key={i} 
                                        src={slide.bg_image} 
                                        className={style.bg_image}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2 }} />
                        }

                        return content
                    })}
                </AnimatePresence>
            </div>

            <div className={style.main}>
                <div className={`${style.row_1__col_1} ${style.segment}`}></div>
                <div className={`${style.row_1__col_2} ${style.segment}`}></div>
                <div className={`${style.row_1__col_3} ${style.segment}`}></div>
                <div className={`${style.row_1__col_4} ${style.segment}`}></div>
                
                <div className={`${style.row_2__col_1} ${style.segment}`}>
                    <a href='#'>
                        <TwitterIcon addClassName="color"/>
                    </a>
                    <a href='#'>
                        <LinkedinIcon addClassName="color"/>
                    </a>
                </div>
                <div className={`${style.row_2__col_2} ${style.segment} ${style.content}`}>
                    <AnimatePresence 
                        initial={false}
                        exitBeforeEnter={false}
                    >
                        {slides.map((slide, i) => {
                            return i === index ? <BlockContent key={i}>{slide.block1_content}</BlockContent> : null
                        })}
                    </AnimatePresence>
                </div>
                <div className={`${style.row_2__col_3} ${style.segment} ${style.content}`}>
                    <AnimatePresence 
                        initial={false}
                        exitBeforeEnter={false}
                    >
                        {slides.map((slide, i) => {
                            return i === index ? <BlockContent key={i}>{slide.block2_content}</BlockContent> : null
                        })}
                    </AnimatePresence>
                </div>
                <div className={`${style.row_2__col_4} ${style.segment}`}>
                    <div className={style.thumbtack} onClick={pinHandler}>
                        {
                            function() {
                                if (pinned) {
                                    return (
                                        <motion.div 
                                            className={`${style.icon} ${style.pinned}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: .5 }}
                                        >
                                        </motion.div>
                                    )
                                } else {
                                    return (
                                        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                                            className={`${style.icon} ${style.unpin}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: .5 }}
                                        >
                                            <path d="M9.068,16.347l4.9,4.9.707-.707a7.977,7.977,0,0,0,2.075-7.619l-.246-1,2.086-2.086.217.217a3.085,3.085,0,0,0,3.938.4,3,3,0,0,0,.38-4.565L18.2.954a3.085,3.085,0,0,0-3.938-.4,3,3,0,0,0-.38,4.565l.293.293L12.085,7.5,11.1,7.258A7.985,7.985,0,0,0,3.464,9.33l-.707.707,4.9,4.895L.293,22.293l1.414,1.414ZM10.607,9.2l2.1.514,4.3-4.3L15.293,3.707a1,1,0,0,1,.134-1.528,1.084,1.084,0,0,1,1.356.19l4.924,4.924h0a1,1,0,0,1-.134,1.528,1.084,1.084,0,0,1-1.356-.19L18.586,7l-4.3,4.3.518,2.111a5.977,5.977,0,0,1-.9,4.946L5.646,10.1A5.986,5.986,0,0,1,10.607,9.2Z"/>
                                        </motion.svg>
                                    )
                                }
                            } ()
                        }
                    </div>
                </div>
                
                <div className={`${style.row_3__col_1} ${style.segment}`}>

                    <p className={`text ${style.nth_Slide_I}`}>{indexString}</p>

                </div>
                <div className={`${style.row_3__col_2} ${style.segment}`}>

                    <p className="text h3 lh-130p fg-color2">It's not all about outside, <br/>
                        but inside too
                    </p>
                    <p className="text lh-130p fs-70p">Have you hugged someone battling <br/>
                        depression today?
                    </p>

                </div>
                <div className={`${style.row_3__col_3} ${style.segment}`}>   

                    <Button link={addressMapLink}>
                        <LocationIcon addClassName="align-self-start color" width="27px"/>
                        <List listData={address} addClassName="color"/>
                    </Button>

                </div>
                <div className={`${style.row_3__col_4} ${style.segment}`}></div>
            </div>

            <div className={style.dots}>
                {slides.map((slide, i) => {
                    return (
                        <div 
                            key={i} 
                            className={`${style.dot}`} 
                            onClick={() => {dotClickHandler(i)}}
                        >
                            {
                                function() {
                                    if (i === index) {
                                        return <motion.div 
                                                    className={style.fill}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                </motion.div>
                                    }
                                } ()
                            }
                        </div>
                    )
                })}
            </div>

            <div className={`${style.scroll_down}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                    className={style.icon}
                    onClick={scrollDown}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
    
        </div>
    )
}



export default Carousel