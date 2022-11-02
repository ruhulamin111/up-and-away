import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 h-20 w-11/12 mx-auto">
                {/* small screen */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Up and Away</Link>
                </div>
                {/* large screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Flight</Link></li>
                        <li><Link to='/'>Hotel</Link></li>
                        <li><Link to='/'>Holiday</Link></li>
                        <li tabIndex={0}>
                            <Link to=''>
                                Visa
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link to=''>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/'>News & Media</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Get started</a> */}
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex={0}>
                            <Link to=''>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to=''>Submenu 1</Link></li>
                                <li><Link to=''>Submenu 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
