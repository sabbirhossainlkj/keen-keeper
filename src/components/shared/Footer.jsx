import React from 'react';

import instagramimg from '../../assets/instagram.png'
import facebookimg from '../../assets/facebook.png'
import twitterimg from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className="border text-center space-y-5 p-14 bg-[#244D3F] text-white">
      <div  className='space-y-4'>
        <h1 className="text-5xl font-bold">KeenKeeper</h1>
        <p className="text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className=" border-b border-gray-400">
        <p>Social Links</p>
            <ul className="flex justify-center gap-3 py-5">
                <li><img src={instagramimg} alt="Instagram" /></li>
                <li><img src={facebookimg} alt="Facebook" /></li>
                <li><img src={twitterimg} alt="Twitter" /></li>
            </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-400">&copy; 2023 KeenKeeper. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-400">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
    </div>
    );
};

export default Footer;