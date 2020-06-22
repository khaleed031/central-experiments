import React from 'react'

const WelcomeBanner = () => {
    return (
        <div className="contentContainer text-center">
            <img src="/images/welcome.png" alt="Welcome"/>
            <div className="my-2">Welcome to the new central experience designed for you.</div>
            <a href="#" className="moreLink">Learn More</a>
        </div>
    )
}

export default WelcomeBanner;