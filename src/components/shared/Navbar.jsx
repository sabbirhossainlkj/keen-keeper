import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between border border-gray-300 p-5 rounded-2xl shadow-2xl'>
            <a className="btn btn-ghost text-xl font-bold">Keen<span className="text-[#244D3F] font-bold">Keeper</span></a>
            <ul className='flex gap-3 items-center'>
                <li><NavLink className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 font-bold"
                : ""
            } to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 font-bold"
                : ""
            } to="/timeline">Timeline</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 font-bold"
                : ""
            } to="/stats">Stats</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;