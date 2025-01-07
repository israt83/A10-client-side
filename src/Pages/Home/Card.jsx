


import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ tourismSpot }) => {
  if (!tourismSpot) {
    return <div>Loading...</div>; 
  }

  const { _id, spotName, countryName, location, description, image, averagecost, traveltime, totalvisitors, seasonality } = tourismSpot;

  return (
    <div className="hover:animate-pulse relative max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <div
        className="relative h-72 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
          <h2 className="text-xl font-semibold tracking-wide text-white">{spotName}</h2>
        </div>
      </div>
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-900">{countryName}</span>
      </div>
      
      <div className="mt-4">
        <div className="flex space-x-1">
          <p className="mt-1"><FaLocationDot /></p>
          <p className="font-semibold"> {location}</p>
        </div>
        
        <div className="grid grid-cols-2 py-2">
          <div className="flex space-x-1">
            <p className="mt-1"><FaDollarSign /></p>
            <p className="">{averagecost}</p>
          </div>
        
          <div className="flex space-x-1">
            <p className="mt-1"><MdAccessTime /></p>
            <p className="">{traveltime}</p>
          </div>
        </div>
      </div>
        {
            description.length > 50 ?
          <p className="dark:text-gray-800 ">{description.slice(0, 100)} ...<br /><button className='btn btn-outline text-blue-900 w-full mt-3'><Link to={`/details/${_id}`} className="text-gray-950 font-bold" data-aos="zoom-in"><span className="text-blue-900">View Details</span></Link></button></p> :
          <p className="dark:text-gray-800">{description}</p>
        } 

      

    </div>
  );
};

export default Card;
