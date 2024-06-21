

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
const Navbarr = () => {
    // update state on toggle
    const [theme, setTheme] = useState('light')
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { logout, user } = useAuth();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const navLinks = (
        <>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '} to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '} to="/allTouristSpot">All TOURISTS SPOT</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '} to="/addtouristspot">ADD TOURISTS SPOT</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '} to="/mylist">MY LIST</NavLink>
            </li>
        </>
    );

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    return (
        <div className="fixed top-0 left-0 w-full z-50 ">
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown" onClick={toggleDropdown}>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dropdownVisible ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                            {navLinks}
                        </ul>
                    </div>
                    {/* <img className="w-40 h-28" src="" alt="https://i.ibb.co/cK52VFN/In-Shot-20240606-214329704.png" /> */}
                    <img className="w-36 h-32" src="https://i.ibb.co/cK52VFN/In-Shot-20240606-214329704.png" alt="In-Shot-20240606-214329704"  />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div>
                      
                          {user ? (
                            
        <Tooltip title="Click me" position="top" trigger="mouseenter" animation="fade" arrow={true}>
          <Link to="/register">
            <button type="" className="lg:px-5 lg:py-3 mr-4 font-semibold rounded hidden btn btn-outline border-blue-900">
              REGISTER
            </button>
          </Link>
        </Tooltip>
       
      ) : (
        <Tooltip title="Click me" position="top" trigger="mouseenter" animation="fade" arrow={true}>
          <Link to="/register">
            <button type="" className="lg:px-5 lg:py-3 lg:mr-4 font-normal lg:font-semibold rounded lg:btn lg:btn-outline lg:border-blue-900">
              REGISTER
            </button>
          </Link>
        </Tooltip>
      )}
                    </div>
                
                    {user ? (
                        <div className="dropdown dropdown-end" onClick={toggleDropdown}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" />
                                </div>
                            </label>
                            <ul className={`menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dropdownVisible ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user.displayName || 'User Name Not Found'}</button>
                                </li>
                                <li>
                                    <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
                                </li>
                                <li>
                                    <Link to='/updateProfile'>
                                    <button  className="btn btn-sm btn-ghost">UpdateProfile</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Tooltip title="Click me" position="top" trigger="mouseenter" animation="fade" arrow={true}>
                        <Link to='/login'>
                            <button type="" className="lg:uppercase lg:px-5 lg:py-3 font-normal lg:font-semibold rounded lg:btn lg:btn-outline lg:border-blue-900 ">LOG IN</button>
                        </Link>
                        </Tooltip>
                    )}
                    <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 ml-2 h-7'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100 '
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
                </div>
            </div>
        </div>
    );
};

export default Navbarr;
