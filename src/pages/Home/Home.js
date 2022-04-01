import React from 'react'

//import style from './Home.module.css'

import Carousel from '../../components/carousel/carousel'
import InfoSection from '../../components/info_section/info_section'

import { homeInfoSectionData } from '../../data/info_section'



function Home() {
    return (
        <>
            <Carousel/>
            <InfoSection blocks={homeInfoSectionData} />
        </>
    )
}



export default Home