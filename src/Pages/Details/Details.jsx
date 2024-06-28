

import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const tourismSpots = useLoaderData();
    const { id } = useParams();

    if (!tourismSpots) {
        return <div>Tourism spot not found!</div>;
    }

    return (
        <div className="container mx-auto mt-36 rounded-2xl hero min-h-screen bg-base-200 mb-14">
            <div className="hero-content flex-col lg:flex-row">
                <img 
                    src={tourismSpots.image} 
                    className="w-[600px] h-[500px] rounded-lg shadow-2xl" 
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration='1000'
                    alt={tourismSpots.spotName}
                />
                <div 
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration='1000'
                >
                    <h1 className="text-5xl font-semibold text-blue-900">{tourismSpots.spotName}</h1>
                    <p className="py-6 text-[#706F6F]">{tourismSpots.description}</p>
                    <h2 className='text-2xl font-bold my-2 text-[#706F6F] '>Country: {tourismSpots.countryName}</h2>
                    <div className="flex space-x-10 py-2">
                      <div className="flex space-x-1">
                        <p className="mt-1"><FaDollarSign /></p>
                        <p className="">{tourismSpots.averagecost}</p>
                      </div>
               
                      <div className="flex space-x-1">
                        <p className="mt-1"><MdAccessTime /></p>
                        <p className="">{tourismSpots.traveltime}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                    <p className="mt-1"><FaLocationDot /></p>
                    <p className="font-semibold"> {tourismSpots.location}</p>
                </div>
                <p className="py-2">Best Season:{tourismSpots.seasonality}</p>
                <p>Total Visitors Per Year: {tourismSpots.totalvisitors}</p> 
                
                </div>
            </div>
        </div>
    );
};

export default Details;

// import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
// import { MdAccessTime } from "react-icons/md";
// import { useLoaderData } from 'react-router-dom';

// const Details = () => {
//   const tourismSpot = useLoaderData();

//   if (!tourismSpot) {
//     return <div>Tourism spot not found!</div>;
//   }

//   return (
//     <div className="container mx-auto mt-36 rounded-2xl hero min-h-screen bg-base-200 mb-14">
//         <h2 className="text-2xl font-bold">{tourismSpot.image}</h2>
//       <div className="hero-content flex-col lg:flex-row">
//         <img 
//           src={tourismSpot.image} 
//           className="w-[600px] h-[500px] rounded-lg shadow-2xl" 
//           data-aos="zoom-in"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration='1000'
//           alt={tourismSpot.spotName}
//         />
//         <div 
//           data-aos="zoom-in"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration='1000'
//         >
//           <h1 className="text-5xl font-semibold text-blue-900">{tourismSpot.spotName}</h1>
//           <p className="py-6 text-[#706F6F]">{tourismSpot.description}</p>
//           <h2 className='text-2xl font-bold my-2 text-[#706F6F] '>Country: {tourismSpot.countryName}</h2>
//           <div className="flex space-x-10 py-2">
//             <div className="flex space-x-1">
//               <p className="mt-1"><FaDollarSign /></p>
//               <p className="">{tourismSpot.averagecost}</p>
//             </div>
       
//             <div className="flex space-x-1">
//               <p className="mt-1"><MdAccessTime /></p>
//               <p className="">{tourismSpot.traveltime}</p>
//             </div>
//           </div>
//           <div className="flex space-x-1">
//           <p className="mt-1"><FaLocationDot /></p>
//           <p className="font-semibold"> {tourismSpot.location}</p>
//         </div>
//         <p className="py-2">Best Season:{tourismSpot.seasonality}</p>
//         <p>Total Visitors Per Year: {tourismSpot.totalvisitors}</p> 
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


// CountrySpotCardDetails.jsx

// import React from 'react';
// // import { FaLocationDot, FaDollarSign } from "react-icons/fa";
// // import { MdAccessTime } from "react-icons/md";
// import { useLoaderData } from 'react-router-dom';

// const Details = () => {
//   const tourismSpot = useLoaderData();

//   if (!tourismSpot) {
//     return <div>Tourism spot not found!</div>;
//   }

//   return (
//     <div className="container mx-auto mt-36 rounded-2xl hero min-h-screen bg-base-200 mb-14">
//       <div className="hero-content flex-col lg:flex-row">
//         <img 
//           src={tourismSpot.image} 
//           className="w-[600px] h-[500px] rounded-lg shadow-2xl" 
//           data-aos="zoom-in"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration='1000'
//           alt={tourismSpot.tourist_spot_name}
//         />
//         <div 
//           data-aos="zoom-in"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration='1000'
//         >
//           <h1 className="text-5xl font-semibold text-blue-900">{tourismSpot.tourist_spot_name}</h1>
//           <p className="py-6 text-[#706F6F]">{tourismSpot.short_description}</p>
//           <h2 className='text-2xl font-bold my-2 text-[#706F6F]'>Country: {tourismSpot.country_name}</h2>
//           <div className="flex space-x-10 py-2">
//             <div className="flex space-x-1">
//               <p className="mt-1"></p>
//               <p>{tourismSpot.average_cost}</p>
//             </div>
//             <div className="flex space-x-1">
//               <p className="mt-1"></p>
//               <p>{tourismSpot.traveltime}</p>
//             </div>
//           </div>
//           <div className="flex space-x-1">
//             <p className="mt-1"></p>
//             <p className="font-semibold">{tourismSpot.location}</p>
//           </div>
//           <p className="py-2">Best Season: {tourismSpot.seasonality}</p>
//           <p>Total Visitors Per Year: {tourismSpot.totalvisitors}</p> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;



