

// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateList = () => {
//     const userSpot = useLoaderData();
//     const { _id,userName , email,spotName, countryName , location , description, image ,averagecost,traveltime ,totalvisitors,seasonality } = userSpot;

//     const handleUpdateSpot = (event) => {
//         event.preventDefault();

//         const form = event.target;
//         const userName = form.userName.value;
//         const email = form.email.value;
//         const spotName = form.spotName.value;
//         const countryName = form.countryName.value;
//         const location = form.location.value;
//         const description = form.description.value;
//         const image = form.image.value;
//         const averagecost = form.averagecost.value;
//         const traveltime= form.traveltime.value;
//         const totalvisitors= form.totalvisitors.value;
//         const seasonality= form.seasonality.value;
//         const updateSpot = {userName , email,spotName, countryName , location , description, image ,averagecost,traveltime ,totalvisitors,seasonality}
//        console.log(updateSpot);


//         // Send data to the server
//         fetch(`http://localhost:5000/userspot/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updateSpot)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Coffee updated successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     });
//                 }
//             });
//     };

//     return (
//         <div>
//             <section className="p-6 dark:bg-gray-100 dark:text-gray-900 pt-44 flex dark:border-r-orange-50">
//                 <form onSubmit={handleUpdateSpot} className="container flex flex-col mx-auto space-y-12">
//                     <h1 className="text-2xl lg:text-4xl font-bold text-center">Add your TouristSpot</h1>
//                     <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="image" className="text-sm">Image URL</label>
//                             <input id="image" name="image" defaultValue={image}  type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="tourists_spot_name" className="text-sm">Tourists Spot Name</label>
//                             <input name="spotName" id="tourists_spot_name" type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="country_name" className="text-sm">Country Name</label>
//                             <input name="countryName" id="country_name" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="location" className="text-sm">Location</label>
//                             <input name="location" id="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full">
//                             <label htmlFor="description" className="text-sm">Short Description</label>
//                             <textarea name="description" id="description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"></textarea>
//                         </div>
//                         <div className="col-span-full sm:col-span-2">
//                             <label htmlFor="average_cost" className="text-sm">Average Cost</label>
//                             <input name="averagecost" id="average_cost" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-2">
//                             <label htmlFor="seasonality" className="text-sm">Seasonality</label>
//                             <input name="seasonality" id="seasonality" type="text" placeholder="e.g. Summer, Winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-2">
//                             <label htmlFor="travel_time" className="text-sm">Travel Time</label>
//                             <input name="traveltime" id="travel_time" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
                       
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="name" className="text-sm">User Name</label>
//                             <input name="userName" id="name" type="text" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
//                         <div className="col-span-full sm:col-span-3">
//                             <label htmlFor="email" className="text-sm">User Email</label>
//                             <input name="email" id="email" type="email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                         </div>
// 						<div className="col-span-full sm:col-span-2 ">
//                             <div className="w-full sm:w-1/2">
//                                 <label htmlFor="total_visitors" className="text-sm">Total Visitors Per Year</label>
//                                 <input name="totalvisitors" id="total_visitors" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-span-full">
//                         <button value='UPDATE' type="submit" className="btn btn-block font-semibold rounded dark:bg-blue-950 dark:text-gray-100">UPDATE</button>
//                     </div>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default UpdateList ;


import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const UpdateList = () => {
    const userSpot = useLoaderData();
    const { _id, userName, email, spotName, countryName, location, description, image, averagecost, traveltime, totalvisitors, seasonality } = userSpot;

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        spotName: '',
        countryName: '',
        location: '',
        description: '',
        image: '',
        averagecost: '',
        traveltime: '',
        totalvisitors: '',
        seasonality: ''
    });

    useEffect(() => {
        if (userSpot) {
            setFormData({
                userName: userSpot.userName,
                email: userSpot.email,
                spotName: userSpot.spotName,
                countryName: userSpot.countryName,
                location: userSpot.location,
                description: userSpot.description,
                image: userSpot.image,
                averagecost: userSpot.averagecost,
                traveltime: userSpot.traveltime,
                totalvisitors: userSpot.totalvisitors,
                seasonality: userSpot.seasonality
            });
        }
    }, [userSpot]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdateSpot = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/userspot/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist spot updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900 pt-44 flex dark:border-r-orange-50">
                <form onSubmit={handleUpdateSpot} className="container flex flex-col mx-auto space-y-12">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center">Update your Tourist Spot</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image" className="text-sm">Image URL</label>
                            <input
                                id="image"
                                name="image"
                                value={formData.image}
                                type="text"
                                placeholder="Image URL"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="spotName" className="text-sm">Tourist Spot Name</label>
                            <input
                                name="spotName"
                                id="spotName"
                                type="text"
                                placeholder="Tourist Spot Name"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.spotName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="countryName" className="text-sm">Country Name</label>
                            <input
                                name="countryName"
                                id="countryName"
                                type="text"
                                placeholder="Country Name"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.countryName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="location" className="text-sm">Location</label>
                            <input
                                name="location"
                                id="location"
                                type="text"
                                placeholder="Location"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Short Description</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Short Description"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="averagecost" className="text-sm">Average Cost</label>
                            <input
                                name="averagecost"
                                id="averagecost"
                                type="text"
                                placeholder="Average Cost"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.averagecost}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="seasonality" className="text-sm">Seasonality</label>
                            <input
                                name="seasonality"
                                id="seasonality"
                                type="text"
                                placeholder="e.g. Summer, Winter"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.seasonality}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="traveltime" className="text-sm">Travel Time</label>
                            <input
                                name="traveltime"
                                id="traveltime"
                                type="text"
                                placeholder="Travel Time"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.traveltime}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="userName" className="text-sm">User Name</label>
                            <input
                                name="userName"
                                id="userName"
                                type="text"
                                placeholder="User Name"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">User Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="User Email"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="totalvisitors" className="text-sm">Total Visitors Per Year</label>
                                <input
                                    name="totalvisitors"
                                    id="totalvisitors"
                                    type="text"
                                    placeholder="Total Visitors Per Year"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                                    value={formData.totalvisitors}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button value='UPDATE' type="submit" className="btn btn-block font-semibold rounded dark:bg-blue-950 dark:text-gray-100">UPDATE</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateList;
