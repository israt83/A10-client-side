

import React from 'react';
import { Link } from "react-router-dom";

const Countrys = ({ country }) => {
    return (
        <Link to={`/country/${country._id}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center p-6 rounded-xl sm:px- dark:text-gray-800 hover:animate-pulse ">
                <div className="card card-compact w-72">
                    <figure>
                        <img className="w-72 h-52" src={country.image} alt={country.countryName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">{country.countryName}</h2>
                        {
                            country.description.length > 50
                                ? <p className="dark:text-gray-800">{country.description.slice(0, 90)}...</p>
                                : <p className="dark:text-gray-800">{country.description}</p>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Countrys;


// import React from "react";
// import { Link } from "react-router-dom";

// const Countrys = ({ country }) => {
//     return (
//         <Link to={`/country/${country._id}`} className="block">
//             <div className="flex justify-center p-4  rounded-xl hover:animate-pulse">
//                 <div className="card card-compact w-full sm:w-72 max-w-sm md:w-80 lg:w-96">
//                     <figure>
//                         <img
//                             className="w-full h-48 md:h-52 lg:h-56 object-cover rounded-t-xl"
//                             src={country.image}
//                             alt={country.countryName}
//                         />
//                     </figure>
//                     <div className="card-body p-4 md:p-6">
//                         <h2 className="text-lg md:text-xl font-bold">
//                             {country.countryName}
//                         </h2>
//                         {country.description.length > 50 ? (
//                             <p className="text-sm md:text-base text-gray-600 dark:text-gray-800">
//                                 {country.description.slice(0, 90)}...
//                             </p>
//                         ) : (
//                             <p className="text-sm md:text-base text-gray-600 dark:text-gray-800">
//                                 {country.description}
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default Countrys;
