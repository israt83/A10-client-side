

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


