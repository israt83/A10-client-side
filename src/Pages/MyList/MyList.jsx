import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';




const MyList = ({ userSpot, userSpots, setUserSpots }) => {
    const { _id, userName, email, spotName, countryName, location, description, image, averagecost, traveltime, totalvisitors, seasonality } = userSpot;


    const handleDelete = _id =>{
        console.log(_id);
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
            fetch(`http://localhost:3000/userspot/${_id}`,{
            method:'DELETE',
           
           })
           .then(res => res.json())
           .then(data=>{
               console.log(data);
               if(data.deletedCount > 0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your touristspot has been deleted.",
                    icon: "success"
              });
              const remaining = userSpots.filter(spot => spot._id !== _id)
              setUserSpots(remaining);
               }

           })  
            }
          });
    }
  
    return (
    <div className="container mx-auto rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-800">

	<img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500 rounded-xl" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<p>{countryName}</p>
            <div className="space-x-4">
            {/* <button onClick={() =>handleDelete(_id)} ><RiDeleteBin6Line /></button> */}
           
      <Tooltip title="Delete" position="top" trigger="mouseenter" animation="fade" arrow={true}>
        <button onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Line />
        </button>
      </Tooltip>
  
          
           
           
      <Link to={`/updatelist/${_id}`}>
        <Tooltip title="Edit" position="top" trigger="mouseenter" animation="fade" arrow={true}>
          <button className="btn btn-edit">
            <FaRegEdit />
          </button>
        </Tooltip>
      </Link>
  
            </div>
        </div>
        {
                        description.length > 50 ?
                            <p className="dark:text-gray-800 ">{description.slice(0, 100)} ...<br /> <span className="text-blue-900"></span></p> :
                            <p className="dark:text-gray-800">{description}</p>
                }
	</div>
</div>

    );
  };
  
  export default MyList;
  

