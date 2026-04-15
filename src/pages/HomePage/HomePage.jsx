import React, { Suspense } from 'react';
import Banner from '../../components/homepage/Banner';
import AllFriends from '../../components/homepage/AllFriends';
import { GridLoader } from 'react-spinners';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <GridLoader />
      </div>}>

            <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;