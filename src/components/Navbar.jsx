import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-indigo-900 text-white py-2">

            <div className="logo">
                <span className="font-bold text-xl mx-9 ">iTask</span>
            </div>

            <ul className="flex gap-8 mx-9">
                <li className="cursur-pointer hover:font-bold transition -all duration-50">Home</li>
                <li className="cursur-pointer hover:font-bold transition -all duration-50dddd">Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
