import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="my-12 w-10/12 mx-auto text-center space-y-5">
      <h1 className="font-bold text-4xl">Friends to keep close in your life</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white font-bold"><FaPlus />Add a Friend</button>
      <div className="flex justify-between items-center">
        <div className=" p-5 shadow-2xl bg-gray-100 rounded-2xl">
            <h2 className="text-[#244D3F] font-bold text-xl">8</h2>
            <p className="text-gray-400">Total Friends</p>
        </div>
        <div className=" p-5 shadow-2xl bg-gray-100 rounded-2xl">
            <h2 className="text-[#244D3F] font-bold text-xl">3</h2>
            <p className="text-gray-400">On Track</p>
        </div>
        <div className=" p-5 shadow-2xl bg-gray-100 rounded-2xl">
            <h2 className="text-[#244D3F] font-bold text-xl">4</h2>
            <p className="text-gray-400">Need Attention</p>
        </div>
        <div className=" p-5 shadow-2xl bg-gray-100 rounded-2xl">
            <h2 className="text-[#244D3F] font-bold text-xl">12</h2>
            <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>
    </div>
    );
};

export default Banner;