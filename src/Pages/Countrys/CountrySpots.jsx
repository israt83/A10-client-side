

// import {  useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// // import CountrySpot from './CountrySpot';
// import CountrySpotCard from './CountrySpotCard';

// const CountrySpots = () => {
//   const country = useLoaderData();
//   const { id } = useParams();
//   const [selectedSpot, setSelectedSpot] = useState(null);
    
// //   const tourismSpots = useLoaderData();
// //   const [countriesSpot, setCountriesSpot] = useState([]);

//   const handleSpotClick = (spot) => {
//     setSelectedSpot(spot);
//   };

//   if (!country) {
//     return <div>Country not found!</div>;
//   }

//   const tourismSpotCard = useLoaderData();
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//       fetch('/spotData.json')
//           .then(res => res.json())
//           .then(data => setCountries(data.countries));
//   }, []);

//   return (
//     <section className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-40">
//       <div className='grid grid-cols-2 lg:ml-9'>
//         <div>
//           <img className='w-4/5 rounded-xl' src={country.image} />
//         </div>
//         <div>
//           <h2 className='text-3xl font-semibold text-blue-950'>{country.countryName}</h2>
//           <p className='mt-4'>Country in South Asia</p>
//           <p className='mt-8'>
//             {country.description}
//           </p>
//         </div>
//       {/* <CountrySpot></CountrySpot> */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
//             {countries.map(country =>
//                 country.tourismSpots.map(tourismSpot => (
//                     <CountrySpotCard key={tourismSpot.tourist_spot_name} tourismSpot={tourismSpot} />
//                 ))
//             )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CountrySpots;


import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import CountrySpotCard from './CountrySpotCard';

const CountrySpots = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/countryspot')
            .then(res => res.json())
            .then(data => {
                const selectedCountry = data.countries.find(country => country._id === id);
                setCountry(selectedCountry);
            });
    }, [id]);

    if (!country) {
        return <div>Country not found!</div>;
    }

    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-40">
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-9'>
                <div>
                    <img className='w-4/5 h-96 rounded-xl' src={country.img} alt={country.countryName} />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold text-blue-950'>{country.countryName}</h2>
                    <p className='mt-4'>Country in South Asia</p>
                    <p className='mt-8'>
                        {country.description}
                    </p>
                </div>
            </div>
            <h2 className='text-3xl font-bold  text-center mt-14'>{country.title}</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
                {country.tourismSpots.map(tourismSpot => (
                    <CountrySpotCard key={tourismSpot.tourist_spot_name} tourismSpot={tourismSpot} />
                ))}
            </div>
        </section>
    );
};

export default CountrySpots;
