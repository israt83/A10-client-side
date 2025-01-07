

import React from 'react';

import { useLoaderData } from 'react-router-dom';

const CountrySpotCardDetails = () => {
  const tourismSpotDetails = useLoaderData();

  if (!tourismSpotDetails) {
    return <div>Tourism spot not found!</div>;
  }

  return (
    <div className="container mx-auto mt-36 rounded-2xl hero min-h-screen bg-base-200 mb-14">
      <div className="hero-content flex-col lg:flex-row">
        <img 
          src={tourismSpotDetails.image} 
          className="w-[600px] h-[500px] rounded-lg shadow-2xl" 
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration='1000'
          alt={tourismSpotDetails.tourist_spot_name}
        />
        <div 
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration='1000'
        >
          <h1 className="text-5xl font-semibold text-blue-900">{tourismSpotDetails.tourist_spot_name}</h1>
          <p className="py-6 text-[#706F6F]">{tourismSpotDetails.short_description}</p>
          <h2 className='text-2xl font-bold my-2 text-[#706F6F]'>Country: {tourismSpotDetails.country_name}</h2>
          <div className="flex space-x-10 py-2">
            <div className="flex space-x-1">
              <p className="mt-1"></p>
              <p>{tourismSpotDetails.average_cost}</p>
            </div>
            <div className="flex space-x-1">
              <p className="mt-1"></p>
              <p>{tourismSpotDetails.traveltime}</p>
            </div>
          </div>
          <div className="flex space-x-1">
            <p className="mt-1"></p>
            <p className="font-semibold">{tourismSpotDetails.location}</p>
          </div>
          <p className="py-2">Best Season: {tourismSpotDetails.seasonality}</p>
          <p>Total Visitors Per Year: {tourismSpotDetails.totalvisitors}</p> 
        </div>
      </div>
    </div>
  );
};

export default CountrySpotCardDetails;
