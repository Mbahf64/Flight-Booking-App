import React from 'react'
import Menu from './Menu'
// import FlightMarquee from './FlightMarquee'

const Header = () => {
    return (
        <div className="w-screen flex flex-col items-center justify-center">
          
            <div className="w-[90vw] flex flex-col items-center justify-center ">

                <div className='w-full flex items-center justify-between'>
                    <img src="./logo.svg" alt="logo" className='w-[6rem] z-10' />
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header


