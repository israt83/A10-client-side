import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";

const CountrySpots = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/countryspot")
      .then((res) => res.json())
      .then((data) => {
        const selectedCountry = data.countries.find(
          (country) => country._id === id
        );
        setCountry(selectedCountry);
      });
  }, [id]);

  if (!country) {
    return <div>Country not found!</div>;
  }

  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-40">
    

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:ml-9 p-4 lg:p-8">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="w-full max-w-sm lg:max-w-xl h-auto lg:h-96 rounded-xl object-cover"
            src={country.img}
            alt={country.countryName}
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-950">
            {country.countryName}
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-700">
            Country in South Asia
          </p>
          <p className="mt-8 text-sm lg:text-base text-gray-600 leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold  text-center mt-14">{country.title}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 space-y-5 mt-10">
        {country.tourismSpots.map((tourismSpot) => (
          <CountrySpotCard
            key={tourismSpot.tourist_spot_name}
            tourismSpot={tourismSpot}
          />
        ))}
      </div>
    </section>
  );
};

export default CountrySpots;
