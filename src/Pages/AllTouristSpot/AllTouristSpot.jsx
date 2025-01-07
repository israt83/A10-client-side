

import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const AllTouristSpot = () => {
  const location = useLocation();
  const { _id } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);
  const [touristCountrySpots, setTouristCountrySpots] = useState([]);
  const [userSpots, setUserSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    document.title = "TOURISTCENTER/AllTouristSpot";
    fetchData();
  }, [location.pathname, sortOrder]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [touristSpotRes, userSpotRes, touristCountrySpotRes] = await Promise.all([
        fetch(`http://localhost:3000/spot?sort=${sortOrder}`),
        fetch(`http://localhost:3000/userspot`),
        fetch(`http://localhost:3000/countryspot?sort=${sortOrder}`),
      ]);

      const [touristSpotData, userSpotData, touristCountrySpotData] = await Promise.all([
        touristSpotRes.json(),
        userSpotRes.json(),
        touristCountrySpotRes.json(),
      ]);

      console.log('Tourist Country Spot Data:', touristCountrySpotData);

      setTouristSpots(touristSpotData);
      setUserSpots(userSpotData);

      if (Array.isArray(touristCountrySpotData)) {
        setTouristCountrySpots(touristCountrySpotData);
      } else if (touristCountrySpotData && Array.isArray(touristCountrySpotData.countries)) {
        const allTouristSpots = touristCountrySpotData.countries.flatMap(country => country.tourismSpots);
        setTouristCountrySpots(allTouristSpots);
      } else {
        console.error("Tourist Country Spot Data is not in the expected format:", touristCountrySpotData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <div
        className="mt-20 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="text-2xl lg:text-4xl font-bold my-4 ">
          All Tourist Spots
        </h1>

        <select
          onChange={handleSortChange}
          className="mt-4  p-2 border border-blue-900 rounded"
        >
          <option value="asc">Sort by Cost: Low to High</option>
          <option value="desc">Sort by Cost: High to Low</option>
        </select>
      </div>

      {loading ? ( 
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristSpots.map((spot) => (
              <div key={spot._id} className="border rounded p-4">
                <img
                  src={spot.image}
                  alt={spot.spotName}
                  className="w-full h-64 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
                <p>Average Cost: {spot.averagecost}$</p>
                <p>Location: {spot.location}</p>
                <p>Best Season: {spot.seasonality}</p>
                <button className='btn btn-outline text-blue-900 w-full mt-3'><Link to={`/details/${spot._id}`} className="text-gray-950 font-bold" data-aos="zoom-in"><span className="text-blue-900">View Details</span></Link></button>
              </div>
            ))}
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristCountrySpots.map((spot) => (
              <div key={spot.id} className="border rounded p-4">
                <img
                  src={spot.image}
                  alt={spot.tourist_spot_name}
                  className="w-full h-64 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{spot.tourist_spot_name}</h2>
                <p>Average Cost: {spot.average_cost}</p>
                <p>Location: {spot.location}</p>
                <p>Best Season: {spot.seasonality}</p>
                <button className='btn btn-outline text-blue-900 w-full mt-3'>
                  <Link to={`/detail/${spot.id}`} className="text-gray-950 font-bold">
                    <span className="text-blue-900">View Details</span>
                  </Link>
                </button>
              </div>
            ))}
          </div>

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
      )}
    </>
  );
};

export default AllTouristSpot;


// import { useEffect, useState } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";

// const AllTouristSpot = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [touristSpots, setTouristSpots] = useState([]);
//   const [touristCountrySpots, setTouristCountrySpots] = useState([]);
//   const [userSpots, setUserSpots] = useState([]);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     document.title = "TOURISTCENTER/AllTouristSpot";
//     fetchData();
//   }, [location.pathname, sortOrder]);

//   const fetchData = async () => {
//     setLoading(true); // Set loading to true when fetching data
//     try {
//       const [touristSpotRes, userSpotRes, touristCountrySpotRes] = await Promise.all([
//         fetch(`https://tourism-store-server.vercel.app/spot?sort=${sortOrder}`),
//         fetch(`https://tourism-store-server.vercel.app/userspot`),
//         fetch(`https://tourism-store-server.vercel.app/countryspot?sort=${sortOrder}`),
//       ]);

//       if (!touristSpotRes.ok || !userSpotRes.ok || !touristCountrySpotRes.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const [touristSpotData, userSpotData, touristCountrySpotData] = await Promise.all([
//         touristSpotRes.json(),
//         userSpotRes.json(),
//         touristCountrySpotRes.json(),
//       ]);

//       console.log('Tourist Country Spot Data:', touristCountrySpotData);

//       setTouristSpots(touristSpotData);
//       setUserSpots(userSpotData);

//       if (Array.isArray(touristCountrySpotData)) {
//         setTouristCountrySpots(touristCountrySpotData);
//       } else if (touristCountrySpotData && Array.isArray(touristCountrySpotData.countries)) {
//         const allTouristSpots = touristCountrySpotData.countries.flatMap(country => country.tourismSpots);
//         setTouristCountrySpots(allTouristSpots);
//       } else {
//         console.error("Tourist Country Spot Data is not in the expected format:", touristCountrySpotData);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // Set loading to false when data fetching is complete
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   return (
//     <>
//       <div
//         className="mt-20 text-center mx-auto w-full max-w-screen-lg h-auto lg:h-[300px] flex flex-col justify-center items-center my-10 p-4 lg:p-0"
//         data-aos="zoom-in"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="1000"
//       >
//         <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-7">
//           All Tourist Spots
//         </h1>

//         <select
//           onChange={handleSortChange}
//           className="mt-4 p-2 border border-blue-900 rounded"
//         >
//           <option value="asc">Sort by Cost: Low to High</option>
//           <option value="desc">Sort by Cost: High to Low</option>
//         </select>
//       </div>

//       {loading ? ( // Conditionally render the loading spinner
//         <div className="flex justify-center items-center h-64">
//           <span className="loading loading-spinner loading-lg"></span>
//         </div>
//       ) : (
//         <>
//           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {touristSpots.map((spot) => (
//               <div key={spot._id} className="border rounded p-4">
//                 <img
//                   src={spot.image}
//                   alt={spot.spotName}
//                   className="w-full h-64 object-cover mb-4"
//                 />
//                 <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
//                 <p>Average Cost: {spot.averagecost}$</p>
//                 <p>Location: {spot.location}</p>
//                 <p>Best Season: {spot.seasonality}</p>
//                 <button className='btn btn-outline text-blue-900 w-full mt-3'>
//                   <Link to={`/details/${spot._id}`} className="text-gray-950 font-bold" data-aos="zoom-in">
//                     <span className="text-blue-900">View Details</span>
//                   </Link>
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {touristCountrySpots.map((spot) => (
//               <div key={spot.id} className="border rounded p-4">
//                 <img
//                   src={spot.image}
//                   alt={spot.tourist_spot_name}
//                   className="w-full h-64 object-cover mb-4"
//                 />
//                 <h2 className="text-xl font-bold mb-2">{spot.tourist_spot_name}</h2>
//                 <p>Average Cost: {spot.average_cost}</p>
//                 <p>Location: {spot.location}</p>
//                 <p>Best Season: {spot.seasonality}</p>
//                 <button className='btn btn-outline text-blue-900 w-full mt-3'>
//                   <Link to={`/detail/${spot.id}`} className="text-gray-950 font-bold">
//                     <span className="text-blue-900">View Details</span>
//                   </Link>
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="container mx-auto mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {userSpots.map((spot) => (
//                 <div key={spot._id} className="border rounded p-4">
//                   <img
//                     src={spot.image}
//                     alt={spot.spotName}
//                     className="w-full h-64 object-cover mb-4"
//                   />
//                   <h2 className="text-xl font-bold mb-2">{spot.spotName}</h2>
//                   <p>Average Cost: {spot.averagecost}</p>
//                   <p>Total Visitors Per Year: {spot.totalvisitors}</p>
//                   <p>Travel Time: {spot.traveltime}</p>
//                   <p>Best Season: {spot.seasonality}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default AllTouristSpot;


