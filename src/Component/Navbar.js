import React, { useState } from 'react'
import WagmiUtils from '../Blockchain/wagmiUtils'
import YourApp from '../Blockchain/Component/MyApp'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ currentAccount, resetLottery }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className=" bg-white ">
                <nav className="Navbar">
                    <div className="hidden sm:flex flex-row space-x-4">
                        <Link to="/" className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">Home</Link>
                        <Link to="/winner" className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">Result</Link>
                        {
                            currentAccount === "0x85Cf5Bd5CFE8Ac684B3A4e9C30FD53F9C4a0DEb1" &&
                            <button onClick={resetLottery} className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">Reset</button>
                        }

                        <WagmiUtils />

                    </div>
                    <div className='Doll'>Decentralized Lottery System</div>
                </nav >
            </div >

        </>
    )
}

export default Navbar