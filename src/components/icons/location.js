import React from 'react'



function LocationIcon(props) {
    let newClassName = "icon svg feather feather-map-pin"
    newClassName += " "
    newClassName += props.addClassName ? props.addClassName : ''

    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={newClassName} 
                style={{
                    fill: 'none',
                    stroke: props.color,
                    width: props.width
                }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
}



export default LocationIcon