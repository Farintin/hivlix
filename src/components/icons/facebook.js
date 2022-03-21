import React from 'react'



function FacebookIcon(props) {
    let newClassName = 'icon svg feather feather-facebook'
    newClassName += " "
    newClassName = props.addClassName ? newClassName += props.addClassName : newClassName

    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#000"  strokeLinecap="round" strokeLinejoin="round" className={newClassName} 
                style={{
                    strokeWidth: '0px',
                    transition: 'var(--transition)'
                }}
            >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
}



export default FacebookIcon