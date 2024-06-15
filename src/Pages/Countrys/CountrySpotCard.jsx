





// import { FaLocationArrow,  } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import { Link } from "react-router-dom";

// const CountrySpotCard = ({ tourismSpot }) => {
//     const {image, tourist_spot_name, country_name, location, short_description, average_cost, seasonality ,id} = tourismSpot;

//     return (
//         <div className="hover:animate-pulse relative max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ">
//             <div
//                 className="relative h-72 bg-cover bg-center rounded-md"
              
//                 style={{ backgroundImage: `url(${image})` }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
//                     <h2 className="text-xl font-semibold tracking-wide text-white">{tourist_spot_name}</h2>
//                 </div>
//             </div>
//             <div className="mt-6 mb-2">
//                 <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-900">{country_name}</span>
//             </div>
            
//             <div className="mt-4">
//                 <div className="flex space-x-1">
//                     <p className="mt-1"><FaLocationArrow /></p>
//                     <p className="font-semibold"> {location}</p>
//                 </div>
                
//                 <div className="flex space-x-6 py-2">
//                     <div className="flex space-x-1">
//                         <p className="mt-1"></p>
//                         <p>{average_cost}</p>
//                     </div>
               
//                     <div className="flex space-x-1">
//                         <p className="mt-1"><MdAccessTime /></p>
//                         <p>{seasonality}</p>
//                     </div>
//                 </div>
//             </div>
//             {
//                         short_description.length > 50 ?
//                             <p className="text-base text-[#706F6F] font-semibold">{short_description.slice(0, 100)} ...<br /><button className='btn btn-outline text-blue-900 w-full mt-3'><Link to={`/country/id/:${id}`} className="text-gray-950 font-bold" data-aos="zoom-in"><span className="text-blue-900">View Details</span></Link></button></p> :
//                             <p>{short_description}</p>
//                     }
//         </div>
//     );
// };

// export default CountrySpotCard;


import { FaLocationArrow } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const CountrySpotCard = ({ tourismSpot }) => {
    const { image, tourist_spot_name, country_name, location, short_description, average_cost, seasonality, id } = tourismSpot;

    return (
        <div className="hover:animate-pulse relative max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ">
            <div
                className="relative h-72 bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                    <h2 className="text-xl font-semibold tracking-wide text-white">{tourist_spot_name}</h2>
                </div>
            </div>
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-900">{country_name}</span>
            </div>
            <div className="mt-4">
                <div className="flex space-x-1">
                    <p className="mt-1"><FaLocationArrow /></p>
                    <p className="font-semibold"> {location}</p>
                </div>
                <div className="flex space-x-6 py-2">
                    <div className="flex space-x-1">
                        <p className="mt-1"></p>
                        <p>{average_cost}</p>
                    </div>
                    <div className="flex space-x-1">
                        <p className="mt-1"><MdAccessTime /></p>
                        <p>{seasonality}</p>
                    </div>
                </div>
            </div>
           

{
  short_description.length > 50
    ? <p className="dark:text-gray-800 ">{short_description.slice(0, 100)} ...<br /><button className='btn btn-outline text-blue-900 w-full mt-3'><Link to={`/detail/${tourismSpot.id}`} className="text-gray-950 font-bold"><span className="text-blue-900">View Details</span></Link></button></p>
    : <p className="dark:text-gray-800">{short_description}</p>
}

        </div>
    );
};

export default CountrySpotCard;
