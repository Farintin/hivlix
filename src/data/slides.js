import React from 'react'



//'https://images.squarespace-cdn.com/content/v1/5ceafa407824f80001793b84/1611624521470-D7KOU37JPXX2MSBYGO2Y/shy-blog.jpg',

const slides = [
    {
        bg_image: '/bg1.jpg',
        block1_content: function(){
            return <>
                <p className="text h1">We all <br/>
                    Go through it.
                </p>
                <p className="text h2 fg-color2">Don't feel happy? <span className="typo-attention-color">talk to us</span></p>
                <p className="text paraf fs-70p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed placerat diam vel lectus viverra, vel placerat nisi tristique. 
                    Sed ligula metus, mattis sit amet mattis vitae, rutrum ut lorem.
                </p>
            </>
        }(),
        block2_content: ''
    },
    {
        bg_image: '/shy-blog.jpg',
        block2_content: function(){
            return <>
                <p className="text h1">2We all <br/>
                    Go through it.
                </p>
                <p className="text h2 fg-color2">2Don't feel happy? <span className="typo-attention-color">talk to us</span></p>
                <p className="text paraf fs-70p">2Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed placerat diam vel lectus viverra, vel placerat nisi tristique. 
                    Sed ligula metus, mattis sit amet mattis vitae, rutrum ut lorem.
                </p>
            </>
        }(),
        block1_content: ''
    }
]



export { slides }