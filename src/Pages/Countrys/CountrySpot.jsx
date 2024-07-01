


import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";

const CountrySpot = () => {
    const tourismSpotCard = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // fetch('/spotData.json')
        fetch('https://tourismweb-stores-server.onrender.com/countryspot')
            .then(res => res.json())
            .then(data => setCountries(data.countries));
    }, []);

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
            {countries.map(country =>
                country.tourismSpots.map(tourismSpot => (
                    <CountrySpotCard key={tourismSpot.tourist_spot_name} tourismSpot={tourismSpot} />
                ))
            )}
        </div>
    );
};

export default CountrySpot;
