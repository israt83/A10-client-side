
// import Banner from "./Banner";
// import About from "../About/About";
// import Card from "./Card";
// import 'animate.css/animate.min.css';


// import { useLoaderData } from "react-router-dom";
// import { useEffect } from "react";

// const Home = () => {
//     useEffect(()=>{
//         document.title='TOURISTCENTER/HOME'
//     },[])
//     const tourismSpots = useLoaderData();
//     console.log(tourismSpots);
//     return (
//         <>
//             <Banner />
//             <div className="py-14">
//                 <h2 className="text-4xl font-bold text-center text-blue-950" data-aos="fade-up"
//      data-aos-duration="3000">OUR BEST DESTINATIONS</h2>
//                 <p className="text-center mt-5" data-aos="fade-up"
//      data-aos-duration="3000">Discover the World Most Amazing Tourist Spots.

//      Embark on a journey to explore some of the most captivating tourist destinations across the globe. <br /> Dive into our list of the best tourist spots and let your wanderlust lead the way!</p>
//             </div>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
//                 {tourismspots.map(tourismspots => <Card key={tourismspot._id} tourismspots={_id} />)}
//             </div>
//             <About />
//         </>
//     );
// };

// export default Home;



// import Banner from "./Banner";
// // import About from "../AllTouristSpot/AllTouristSpot";
// import Card from "./Card";
// import 'animate.css/animate.min.css';

// import { useLoaderData } from "react-router-dom";
// import { useEffect } from "react";
// import Countrys from "../Countrys/Countrys";

// const Home = () => {
//     useEffect(() => {
//         document.title = 'TOURISTCENTER/HOME';
//     }, []);
    
//     const tourismSpots = useLoaderData();
//     console.log(tourismSpots);

//     return (
//         <>
//             <Banner />
//             <div className="py-14">
//                 <h2 className="text-4xl font-bold text-center text-blue-950" data-aos="fade-up" data-aos-duration="3000">
//                     OUR BEST DESTINATIONS
//                 </h2>
//                 <p className="text-center mt-5" data-aos="fade-up" data-aos-duration="3000">
//                     Discover the World Most Amazing Tourist Spots. Embark on a journey to explore some of the most captivating tourist destinations across the globe. <br /> 
//                     Dive into our list of the best tourist spots and let your wanderlust lead the way!
//                 </p>
//             </div>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
//                 {tourismSpots.map(tourismSpot => (
//                     <Card key={tourismSpot._id} tourismSpot={tourismSpot} />
//                 ))}
//             </div>
//             {/* <About /> */}
//             <h2 className="text-2xl font-bold text-left ml-20 text-blue-950 uppercase my-10" >
//             featured touristspot country
//             </h2>
//             <div className="container mx-auto grid grid-cols-3  justify-items-center gap-4  mt-10">
//                 {tourismSpots.map(tourismSpot => (
//                     <Countrys key={tourismSpot._id} tourismSpot={tourismSpot} />
//                 ))}
//             </div>
            
//         </>
//     );
// };

// export default Home;


// import Banner from "./Banner";
// import Card from "./Card";
// import 'animate.css/animate.min.css';

// import { useLoaderData, } from "react-router-dom";
// import { useEffect, useState } from "react";
// import CountryCard from "../Country/CountryCard";

// const Home = () => {
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         document.title = 'TOURISTCENTER/HOME';
        
//         // Fetch countries data
//         fetch('http://localhost:5000/country')
//             .then(response => response.json())
//             .then(data => setCountries(data));
//     }, []);

//     const tourismSpots = useLoaderData();
//     console.log(tourismSpots);

//     return (
//         <>
//             <Banner />
//             <div className="py-14">
//                 <h2 className="text-4xl font-bold text-center text-blue-950" data-aos="fade-up" data-aos-duration="3000">
//                     OUR BEST DESTINATIONS
//                 </h2>
//                 <p className="text-center mt-5" data-aos="fade-up" data-aos-duration="3000">
//                     Discover the World Most Amazing Tourist Spots. Embark on a journey to explore some of the most captivating tourist destinations across the globe. <br /> 
//                     Dive into our list of the best tourist spots and let your wanderlust lead the way!
//                 </p>
//             </div>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
//                 {tourismSpots.map(tourismSpot => (
//                     <Card key={tourismSpot._id} tourismSpot={tourismSpot} />
//                 ))}
//             </div>

//             <h2 className="text-2xl font-bold text-left ml-20 text-blue-950 uppercase my-10">
//                 Featured Touristspot Country
//             </h2>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mt-10">
//                 {countries.map(country => (
//                     <CountryCard key={country._id} country={country} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;


import Banner from "./Banner";
import Card from "./Card";
import 'animate.css/animate.min.css';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Countrys from "../Countrys/Countrys";
import FAQ from "../FAQ/FAQ";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";

const Home = () => {
  useEffect(() => {
    document.title = 'TOURISTCENTER/HOME';
  }, []);

  const tourismSpots = useLoaderData();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/country')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <>
      <Banner />
      <div className="py-14">
        <h2 className="text-4xl font-bold text-center text-blue-950" data-aos="fade-up" data-aos-duration="3000">
          OUR BEST DESTINATIONS
        </h2>
        <p className="text-center mt-5" data-aos="fade-up" data-aos-duration="3000">
          Discover the World Most Amazing Tourist Spots. Embark on a journey to explore some of the most captivating tourist destinations across the globe. <br />
          Dive into our list of the best tourist spots and let your wanderlust lead the way!
        </p>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
        {tourismSpots.map(tourismSpot => (
          <Card key={tourismSpot._id} tourismSpot={tourismSpot} />
        ))}
      </div>
    
      <h2 className="text-2xl font-bold text-left lg:ml-56 text-blue-950 uppercase mt-20">
        Featured Tourist Spot Countries
      </h2>
        
<div className="container mx-auto flex flex-wrap justify-center w-[900px]">
  {countries.slice(0, 6).map(country => (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={country._id}>
      <div className="rounded">
        <Countrys country={country} />
      </div>
    </div>
  ))}
</div>

<FAQ></FAQ>

    
    </>
  );
};

export default Home;
