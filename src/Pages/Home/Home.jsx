

import Banner from "./Banner";
import Card from "./Card";
import 'animate.css/animate.min.css';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Countrys from "../Countrys/Countrys";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  useEffect(() => {
    document.title = 'TOURISTCENTER/HOME';
  }, []);

  const tourismSpots = useLoaderData();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/country')
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
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10" data-aos="fade-up" data-aos-duration="3000">
        {tourismSpots.map(tourismSpot => (
          <Card key={tourismSpot._id} tourismSpot={tourismSpot} />
        ))}
      </div>

 <h2 className="text-2xl font-bold text-center lg:text-left lg:ml-40 text-blue-950 uppercase mt-20">
                Featured Tourist Spot Countries
            </h2>
            <div className="container mx-auto lg:max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6" data-aos="fade-up" data-aos-duration="3000">
                {countries.slice(0, 6).map(country => (
                    <div key={country._id}>
                        <Countrys country={country} />
                    </div>
                ))}
            </div>

<FAQ></FAQ>

    
    </>
  );
};

export default Home;
