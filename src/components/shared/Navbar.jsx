import React from 'react';
import { CiHome } from 'react-icons/ci';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between border border-gray-300 p-5 rounded-2xl shadow-2xl'>
            <a className="btn btn-ghost text-xl font-bold">Keen<span className="text-[#244D3F] font-bold">Keeper</span></a>
            <ul className='flex gap-8 items-center'>
                <li className='flex-1'><NavLink className={({ isActive }) =>
              isActive
                ?  'bg-[#244D3F] flex btn text-white font-bold'
                : ""
            } to="/"><CiHome />Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive
                ?  'bg-[#244D3F] btn  text-white font-bold'
                : ""
            } to="/timeline"><IoTimeOutline />Timeline</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive
                ?  'bg-[#244D3F] btn text-white font-bold'
                : ""
            } to="/stats"><ImStatsDots />Stats</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;