import React from 'react'

import './carousel.css'

import TwitterIcon from '../icons/twitter'
import LinkedinIcon from '../icons/linkedin'
import LocationIcon from '../icons/location'

import Button from '../button/'
import List from '../list/'

import { slides } from '../../data/slides'



const address = [
    'Street: 29 Cambridge Road.',
    'City: North Cerney.'
]
const addressMapLink = 'https://www.google.com/maps/search/cambridge,+north+cerney/@51.7701277,-1.9766014,16z/data=!3m1!4b1'

function Carousel() {
    const nSlides = slides.length
    let index = 0
    let indexString = String(index + 1).padStart(2, '0')
    let pinned = false

    function slideHandler() {
        let activeBgImage = window.document.querySelector('.carousel .bg_images .bg_image.active')
        if (activeBgImage) {
            let activeIndex = Number(activeBgImage.getAttribute('index'))
            //console.log('prevIndex:', activeIndex)

            let bgImages = window.document.querySelectorAll('.carousel .bg_images .bg_image')
            let block1Contents = window.document.querySelectorAll('.carousel .segment .content.block1')
            let block2Contents = window.document.querySelectorAll('.carousel .segment .content.block2')
            let dots = window.document.querySelectorAll('.carousel .dots .dot')

            let arrs = [bgImages, block1Contents, block2Contents, dots]

            for(let i=0; i < nSlides; i++) {
                for(let arr of arrs) {
                    arr[i].classList.remove('active')
                    if (activeIndex === nSlides - 1) {
                        if (i === 0) {
                            arr[i].classList.add('active')
                            index = i
                        }
                    } else if (i === activeIndex + 1) {
                        arr[i].classList.add('active')
                        index = i
                    }
                }
            }
                
            let indexDom = window.document.querySelector('.carousel .nth_slide')
            indexString = String(index + 1).padStart(2, '0')
            indexDom.innerHTML = indexString
        } else {
            window.clearInterval(loop)
            //console.log('cleared slide loop')
        }
    }

    let loop
    function autoPlay() {
        loop = window.setInterval(function() {
            slideHandler()
        }, 5000)
    }
    autoPlay()
    
    function dotClickHandler(i) {
        window.clearInterval(loop)

        let bgImages = window.document.querySelectorAll('.carousel .bg_images .bg_image')
        let block1Contents = window.document.querySelectorAll('.carousel .segment .content.block1')
        let block2Contents = window.document.querySelectorAll('.carousel .segment .content.block2')
        let dots = window.document.querySelectorAll('.carousel .dots .dot')
        let arrs = [bgImages, block1Contents, block2Contents, dots]
        arrs.forEach(function(arr) {
            arr.forEach(function(elem) {
                elem.classList.remove('active')
            })
            arr[i].classList.add('active')
        })
        let indexDom = window.document.querySelector('.carousel .nth_slide')
        indexString = String(i + 1).padStart(2, '0')
        indexDom.innerHTML = indexString
        
        if (!pinned) {
            autoPlay()
        }
    }

    function pinHandler() {
        let unpinDom = window.document.querySelector('.carousel .thumbtack .unpin')
        let pinnedDom = window.document.querySelector('.carousel .thumbtack .pinned')
        if (!pinned) {
            window.clearInterval(loop)
            pinned = true
            unpinDom.classList.remove('active')
            pinnedDom.classList.add('active')
            //console.log('pinned', pinned)
        } else {
            autoPlay()
            pinned = false
            pinnedDom.classList.remove('active')
            unpinDom.classList.add('active')
            //console.log('pinned', pinned)
        }
    }
    
    function scrollDown() {
        let carouselDom = window.document.querySelector('.carousel')
        window.scrollBy(0, carouselDom.offsetHeight)
    }
    
    return (
        <div className="carousel">

            <div className="bg_images">
                {slides.map((slide, i) => {
                    return <img 
                        key={i} 
                        index={i}
                        src={slide.bg_image} 
                        className={`bg_image ${i === 0 ? 'active' : ''}`} />
                })}
            </div>

            <div className="main">
                <div className="row_1__col_1 segment"></div>
                <div className="row_1__col_2 segment"></div>
                <div className="row_1__col_3 segment"></div>
                <div className="row_1__col_4 segment"></div>
                
                <div className="row_2__col_1 segment">
                    <a href='#'>
                        <TwitterIcon addClassName="color"/>
                    </a>
                    <a href='#'>
                        <LinkedinIcon addClassName="color"/>
                    </a>
                </div>
                <div className="row_2__col_2 segment content">
                    {
                        slides.map((slide, i) => {
                            return (
                                <div 
                                    key={i}
                                    index={i}
                                    className={`content block1 ${i === 0 ? 'active' : ''}`}
                                >
                                    {slide.block1_content}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row_2__col_3 segment content">
                    {
                        slides.map((slide, i) => {
                            return (
                                <div 
                                    key={i}
                                    index={i}
                                    className={`content block2 ${i === 0 ? 'active' : ''}`}
                                >
                                    {slide.block2_content}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row_2__col_4 segment">
                    <div className="thumbtack" onClick={function() {return pinHandler()}}>
                        <div 
                            className="icon pinned"
                        >
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                            className="icon unpin active"
                        >
                            <path d="M9.068,16.347l4.9,4.9.707-.707a7.977,7.977,0,0,0,2.075-7.619l-.246-1,2.086-2.086.217.217a3.085,3.085,0,0,0,3.938.4,3,3,0,0,0,.38-4.565L18.2.954a3.085,3.085,0,0,0-3.938-.4,3,3,0,0,0-.38,4.565l.293.293L12.085,7.5,11.1,7.258A7.985,7.985,0,0,0,3.464,9.33l-.707.707,4.9,4.895L.293,22.293l1.414,1.414ZM10.607,9.2l2.1.514,4.3-4.3L15.293,3.707a1,1,0,0,1,.134-1.528,1.084,1.084,0,0,1,1.356.19l4.924,4.924h0a1,1,0,0,1-.134,1.528,1.084,1.084,0,0,1-1.356-.19L18.586,7l-4.3,4.3.518,2.111a5.977,5.977,0,0,1-.9,4.946L5.646,10.1A5.986,5.986,0,0,1,10.607,9.2Z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="row_3__col_1 segment">

                    <p className="text nth_slide">{indexString}</p>

                </div>
                <div className="row_3__col_2 segment">

                    <p className="text h3 lh-130p fg-color2">It's not all about outside, <br/>
                        but inside too
                    </p>
                    <p className="text lh-130p fs-70p">Have you hugged someone battling <br/>
                        depression today?
                    </p>

                </div>
                <div className="row_3__col_3 segment">   

                    <Button link={addressMapLink}>
                        <LocationIcon addClassName="align-self-start color" width="27px"/>
                        <List listData={address} addClassName="color"/>
                    </Button>

                </div>
                <div className="row_3__col_4 segment"></div>
            </div>

            <div className="dots">
                {slides.map((slide, i) => {
                    return (
                        <div 
                            key={i} 
                            index={i}
                            className={`dot ${i === 0 ? 'active' : ''}`} 
                            onClick={function() {return dotClickHandler(i)}}
                        >
                        </div>
                    )
                })}
            </div>

            <div className="scroll_down" 
                 onClick={scrollDown}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                    className="icon"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
    
        </div>
    )
}



export default Carousel