

import { useEffect } from "react";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
    useEffect(() => {
        document.title = 'TOURISTCENTER/AddTouristSpot'; 
    }, []); 

	const handleAddSpot = event =>{
        event.preventDefault();

        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const averagecost = form.averagecost.value;
        const traveltime= form.traveltime.value;
        const totalvisitors= form.totalvisitors.value;
        const seasonality= form.seasonality.value;
        const newUserSpot = {userName , email,spotName, countryName , location , description, image ,averagecost,traveltime ,totalvisitors,seasonality}
       console.log(newUserSpot);


    //    send data to the server
    fetch('https://tourismweb-stores-server.onrender.com/userspot',{
        method:'POST',
        headers:{
            'content-type' :'application/json'
        },
        body:JSON.stringify(newUserSpot)
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: ' Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })



    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900 pt-44 flex dark:border-r-orange-50">
                <form onSubmit={handleAddSpot} className="container flex flex-col mx-auto space-y-12">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center">Add your TouristSpot</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image" className="text-sm">Image URL</label>
                            <input id="image" name="image" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="tourists_spot_name" className="text-sm">Tourists Spot Name</label>
                            <input name="spotName" id="tourists_spot_name" type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="country_name" className="text-sm">Country Name</label>
                            <input name="countryName" id="country_name" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="location" className="text-sm">Location</label>
                            <input name="location" id="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Short Description</label>
                            <textarea name="description" id="description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="average_cost" className="text-sm">Average Cost</label>
                            <input name="averagecost" id="average_cost" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="seasonality" className="text-sm">Seasonality</label>
                            <input name="seasonality" id="seasonality" type="text" placeholder="e.g. Summer, Winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="travel_time" className="text-sm">Travel Time</label>
                            <input name="traveltime" id="travel_time" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                       
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">User Name</label>
                            <input name="userName" id="name" type="text" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">User Email</label>
                            <input name="email" id="email" type="email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                        </div>
						<div className="col-span-full sm:col-span-2 ">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="total_visitors" className="text-sm">Total Visitors Per Year</label>
                                <input name="totalvisitors" id="total_visitors" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button value='ADD' type="submit" className="btn btn-block font-semibold rounded dark:bg-blue-950 dark:text-gray-100">ADD</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddTouristSpot;
