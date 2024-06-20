


// import { useEffect, useState } from "react";
// import { useLocation,  } from "react-router-dom";

// const AllTouristSpot = () => {
//     const location = useLocation();
//     const [touristSpots, setTouristSpots] = useState([]);
//     const [countries, setCountries] = useState([]);
//     const [userSpots, setUserSpots] = useState([]);
//     const [sortOrder, setSortOrder] = useState('asc');

//     useEffect(() => {
//         document.title = 'TOURISTCENTER/AllTouristSpot';
//         fetchData();
//     }, [location.pathname, sortOrder]);

//     const fetchData = async () => {
//         try {
//             const [touristSpotRes, countryRes, userSpotRes] = await Promise.all([
//                 fetch(`http://localhost:5000/spot?sort=${sortOrder}`),
//                 fetch('/spotData.json'),
//                 fetch(`http://localhost:5000/userspot`)
//             ]);

//             const [touristSpotData, countryData, userSpotData] = await Promise.all([
//                 touristSpotRes.json(),
//                 countryRes.json(),
//                 userSpotRes.json()
//             ]);

//             setTouristSpots(touristSpotData);
//             setCountries(countryData);
//             setUserSpots(userSpotData);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
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
                        
//                     </div>
//                 ))}
//             </div>
//             <div className="container mx-auto mt-10">
                
                
                    
//             </div>
           
//             <div className="container mx-auto mt-10">
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {userSpots.map(spot => (
//                         <div key={spot._id} className="border rounded p-4">
//                             <img src={spot.image} alt={spot.spotName} className="w-full h-64 object-cover mb-4" />
//                             <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
//                             <p>Average Cost: {spot.averagecost}</p>
//                             <p>Total Visitors Per Year: {spot.totalvisitors}</p>
//                             <p>Travel Time: {spot.traveltime}</p>
//                             <p>Best Season: {spot.seasonality}</p>
                           
//                         </div>
//                     ))}
//                 </div>
//         </div>
//     </>
//     );
// };

// export default AllTouristSpot;


// import { useEffect, useState } from "react";
// import { useLocation, useParams,  } from "react-router-dom";

// const AllTouristSpot = () => {
//     const location = useLocation();

// const { id } = useParams();
//     const [touristSpots, setTouristSpots] = useState([]);
//     const [countries, setCountries] = useState([]);
//     const [userSpots, setUserSpots] = useState([]);
//     const [sortOrder, setSortOrder] = useState('asc');


//     useEffect(() => {
//         document.title = 'TOURISTCENTER/AllTouristSpot';
//         fetchData();
//     }, [location.pathname, sortOrder]);

//     useEffect(() => {
//     fetchCountries();
//     }, []);

//     const fetchCountries = () => {
//     fetch("/spotData.json") // Adjust path as necessary
//       .then((res) => res.json())
//       .then((data) => setCountries(data.countries))
//       .catch((error) => console.error("Error fetching countries:", error));
//     };


//     const fetchData = async () => {
//         try {
//             const [touristSpotRes, countryRes, userSpotRes] = await Promise.all([
//                 fetch(`http://localhost:5000/spot?sort=${sortOrder}`),
//                 fetch('/spotData.json'),
//                 fetch(`http://localhost:5000/userspot`)
//             ]);

//             const [touristSpotData, countryData, userSpotData] = await Promise.all([
//                 touristSpotRes.json(),
//                 countryRes.json(),
//                 userSpotRes.json()
//             ]);

//             setTouristSpots(touristSpotData);
//             setCountries(countryData);
//             setUserSpots(userSpotData);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
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
                        
//                     </div>
//                 ))}
//             </div>
//             <div className="container mx-auto mt-10">
                
                
                    
//             </div>
           
//             <div className="container mx-auto mt-10">
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {userSpots.map(spot => (
//                         <div key={spot._id} className="border rounded p-4">
//                             <img src={spot.image} alt={spot.spotName} className="w-full h-64 object-cover mb-4" />
//                             <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
//                             <p>Average Cost: {spot.averagecost}</p>
//                             <p>Total Visitors Per Year: {spot.totalvisitors}</p>
//                             <p>Travel Time: {spot.traveltime}</p>
//                             <p>Best Season: {spot.seasonality}</p>
                           
//                         </div>
//                     ))}
//                 </div>
//         </div>
//     </>
//     );
// };

// export default AllTouristSpot;

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const AllTouristSpot = () => {
  const location = useLocation();
  const { id } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);
  const [countries, setCountries] = useState([]);
  const [userSpots, setUserSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    document.title = "TOURISTCENTER/AllTouristSpot";
    fetchData();
  }, [location.pathname, sortOrder]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    fetch("/spotData.json") // Adjust path as necessary
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.countries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  };

  const fetchData = async () => {
    try {
      const [touristSpotRes, userSpotRes] = await Promise.all([
        fetch(`http://localhost:5000/spot?sort=${sortOrder}`),
        fetch(`http://localhost:5000/userspot`),
      ]);

      const [touristSpotData, userSpotData] = await Promise.all([
        touristSpotRes.json(),
        userSpotRes.json(),
      ]);

      setTouristSpots(touristSpotData);
      setUserSpots(userSpotData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const selectedCountry = countries.find((country) => country._id === id);

  return (
    <>
      <div
        className="mt-20 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7">
          All Tourist Spots
        </h1>
    
        <select
          onChange={handleSortChange}
          className="mt-4 p-2 border border-blue-900 rounded"
        >
          <option value="asc">Sort by Cost: Low to High</option>
          <option value="desc">Sort by Cost: High to Low</option>
        </select>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.map((spot) => (
          <div key={spot._id} className="border rounded p-4">
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{spot.tourists_spot_name}</h2>
            <p>Average Cost: {spot.averagecost}</p>
            <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
            <p>Travel Time: {spot.travel_time}</p>
            <p>Best Season: {spot.seasonality}</p>
          </div>
        ))}
      </div>

      {selectedCountry && (
        <div className="container mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4">{selectedCountry.countryName}</h2>
          <p className="text-lg mb-6">{selectedCountry.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCountry.tourismSpots.map((spot) => (
              <div key={spot.id} className="border rounded p-4">
                <img
                  src={spot.image}
                  alt={spot.tourist_spot_name}
                  className="w-full h-64 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">
                  {spot.tourist_spot_name}
                </h2>
                <p>Average Cost: {spot.average_cost}</p>
                <p>Location: {spot.location}</p>
                <p>Best Season: {spot.seasonality}</p>
                <p>Description: {spot.short_description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userSpots.map((spot) => (
            <div key={spot._id} className="border rounded p-4">
              <img
                src={spot.image}
                alt={spot.spotName}
                className="w-full h-64 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
              <p>Average Cost: {spot.averagecost}</p>
              <p>Total Visitors Per Year: {spot.totalvisitors}</p>
              <p>Travel Time: {spot.traveltime}</p>
              <p>Best Season: {spot.seasonality}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTouristSpot;
