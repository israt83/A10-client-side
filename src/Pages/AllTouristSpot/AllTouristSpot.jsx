

// import { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";

// const AllTouristSpot = () => {
//     const location = useLocation();
//     const [touristSpots, setTouristSpots] = useState([]);
//     const [sortOrder, setSortOrder] = useState('asc');

//     useEffect(() => {
//         document.title = 'TOURISTCENTER/AllTouristSpot';
//         fetchTouristSpots();
//     }, [location.pathname, sortOrder]);

//     const fetchTouristSpots = async () => {
//         const response = await fetch(`http://localhost:5000/spot?sort=${sortOrder}`);
//         const data = await response.json();
//         setTouristSpots(data);
//     };

//     const handleSortChange = (e) => {
//         setSortOrder(e.target.value);
//     };

//     return (
//         <>
//             <div className="mt-32 border border-blue-900 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0" data-aos="zoom-in"
//                 data-aos-easing="ease-out-cubic"
//                 data-aos-duration='1000'>
//                 <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7">All Tourist Spots</h1>
//                 <p className="border border-dashed w-full lg:w-[500px] p-4 text-center text-[#706F6F] text-sm lg:text-base font-semibold">
//                     Discover the latest tourist spots added by users. Explore, plan your trip, and enjoy the best destinations around the world.
//                 </p>
//                 <select onChange={handleSortChange} className="mt-4 p-2 border border-blue-900 rounded">
//                     <option value="asc">Sort by Cost: Low to High</option>
//                     <option value="desc">Sort by Cost: High to Low</option>
//                 </select>
//             </div>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {touristSpots.map(spot => (
//                     <div key={spot._id} className="border rounded p-4">
//                         <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-64 object-cover mb-4" />
//                         <h2 className="text-xl font-bold mb-2">{spot.tourists_spot_name}</h2>
//                         <p>Average Cost: {spot.averagecost}</p>
//                         <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
//                         <p>Travel Time: {spot.travel_time}</p>
//                         <p>Best Season: {spot.seasonality}</p>
//                         <Link to={`/details/${spot._id}`}>
//                             <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">View Details</button>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default AllTouristSpot;


import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const AllTouristSpot = () => {
    const location = useLocation();
    const [touristSpots, setTouristSpots] = useState([]);
    const [countries, setCountries] = useState([]);
    const [userSpots, setUserSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        document.title = 'TOURISTCENTER/AllTouristSpot';
        fetchData();
    }, [location.pathname, sortOrder]);

    const fetchData = async () => {
        try {
            const [touristSpotRes, countryRes, userSpotRes] = await Promise.all([
                fetch(`http://localhost:5000/spot?sort=${sortOrder}`),
                fetch(`http://localhost:5000/country`),
                fetch(`http://localhost:5000/userspot`)
            ]);

            const [touristSpotData, countryData, userSpotData] = await Promise.all([
                touristSpotRes.json(),
                countryRes.json(),
                userSpotRes.json()
            ]);

            setTouristSpots(touristSpotData);
            setCountries(countryData);
            setUserSpots(userSpotData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <>
            <div className="mt-32 border border-blue-900 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration='1000'>
                <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7">All Tourist Spots</h1>
                <p className="border border-dashed w-full lg:w-[500px] p-4 text-center text-[#706F6F] text-sm lg:text-base font-semibold">
                    Discover the latest tourist spots added by users. Explore, plan your trip, and enjoy the best destinations around the world.
                </p>
                <select onChange={handleSortChange} className="mt-4 p-2 border border-blue-900 rounded">
                    <option value="asc">Sort by Cost: Low to High</option>
                    <option value="desc">Sort by Cost: High to Low</option>
                </select>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {touristSpots.map(spot => (
                    <div key={spot._id} className="border rounded p-4">
                        <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-64 object-cover mb-4" />
                        <h2 className="text-xl font-bold mb-2">{spot.tourists_spot_name}</h2>
                        <p>Average Cost: {spot.averagecost}</p>
                        <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
                        <p>Travel Time: {spot.travel_time}</p>
                        <p>Best Season: {spot.seasonality}</p>
                        <Link to={`/details/${spot._id}`}>
                            <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="container mx-auto mt-10">
                <h2 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7 text-center">Countries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countries.map(country => (
                        <div key={country._id} className="border rounded p-4">
                            <h2 className="text-xl font-bold mb-2">{country.name}</h2>
                            <p>Region: {country.region}</p>
                            <p>Population: {country.population}</p>
                            <Link to={`/country/${country._id}`}>
                                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <h2 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7 text-center">User Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userSpots.map(spot => (
                        <div key={spot._id} className="border rounded p-4">
                            <img src={spot.image} alt={spot.spotName} className="w-full h-64 object-cover mb-4" />
                            <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
                            <p>Average Cost: {spot.averagecost}</p>
                            <p>Total Visitors Per Year: {spot.totalvisitors}</p>
                            <p>Travel Time: {spot.traveltime}</p>
                            <p>Best Season: {spot.seasonality}</p>
                            <Link to={`/userspot/${spot._id}`}>
                                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllTouristSpot;
