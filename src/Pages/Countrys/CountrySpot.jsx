// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import CountrySpotCard from "./CountrySpotCard";


// const CountrySpot = ({tourismSpotCard}) => {

//     const tourismSpotCard = useLoaderData();
//     const [countries, setCountries] = useState([]);
  
//     useEffect(() => {
//       fetch('spotData.json')
//         .then(res => res.json())
//         .then(data => setCountries(data));
//     }, []);
  



//     return (
//         <div>
//             <div className="container mx-auto flex flex-wrap justify-center w-[900px]">
//   {countries.slice(0, 6).map(country => (
//     <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={country._id}>
//       <div className="rounded">
//         <CountrySpotCard country={country} />
//       </div>
//     </div>
//   ))}
// </div>
//         </div>
//     );
// };

// export default CountrySpot;


// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import CountrySpotCard from "./CountrySpotCard";

// const CountrySpot = () => {
//     const tourismSpotCard = useLoaderData();
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         fetch('/spotData.json')
//             .then(res => res.json())
//             .then(data => setCountries(data.countries));
//     }, []);

//     return (
      
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
//         {tourismSpots.map(tourismSpot => (
//           <CountrySpotCard key={count._id} tourismSpot={tourismSpot} />
//         ))}
//       </div>
//     );
// };

// export default CountrySpot;


import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";

const CountrySpot = () => {
    const tourismSpotCard = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('/spotData.json')
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
