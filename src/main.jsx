

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NotFound from "./Components/NotFound";
// import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
// import "./index.css";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Login/Register";
// import Root from "./Root";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
// import Details from "./Pages/Details/Details";
// import UpdateProfile from "./Pages/Login/UpdateProfile";
// import AddTouristSpot from "./Pages/AddTouristSpot/AddTouristSpot";
// import AllTouristSpot from "./Pages/AllTouristSpot/AllTouristSpot";
// import MyList from "./Pages/MyList/MyList";
// // import CountrySpots from "./Pages/CountrySpots/CountrySpots";
// // import Countrys from "./Pages/Countrys/Countrys";
// import AddCountry from "./Pages/AddCountry/AddCountry";
// import CountrySpots from "./Pages/Countrys/CountrySpots";
// import UserAddCountry from "./Pages/AddTouristSpot/UserAddCountry";

// const spotUrl = "http://localhost:5000/spot";
// const countryUrl = "http://localhost:5000/country";
// const userspotUrl ='http://localhost:5000/userspot'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: () => fetch(spotUrl).then(response => response.json())
//       },
//       {
//         path: "details/:id",
//         element: <PrivateRoute><Details /></PrivateRoute>,
//         loader: async ({ params }) => {
//           const response = await fetch(`${spotUrl}/${params.id}`);
//           return response.json();
//         }
//       },
//       {
//         path: "allTouristSpot",
//         element: <AllTouristSpot />,
//         loader: () => fetch(spotUrl).then(response => response.json())
//       },
//       {
//         path: "addtouristspot",
//         element: <PrivateRoute><AddTouristSpot /></PrivateRoute>,
//       },
//       {
//         path: "useraddtouristspot",
//         element: <PrivateRoute><UserAddCountry/></PrivateRoute>,
//       },
//       {
//         path: "addcountry",
//         element: <PrivateRoute><AddCountry/></PrivateRoute>,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "updateProfile",
//         element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
//       },
//       {
//         path: "mylist",
//         element: <PrivateRoute><MyList /></PrivateRoute>,
//         loader: () => fetch(userspotUrl).then(response => response.json())
//       },
     
//       {
//         path: "country/:id",
//         element: <CountrySpots />,
//         loader: async ({ params }) => {
//           const response = await fetch(`${countryUrl}/${params.id}`);
//           return response.json();
//         }
//       },
      
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <FirebaseProvider>
//       <RouterProvider router={router} />
//     </FirebaseProvider>
//   </React.StrictMode>
// );


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import "./index.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Root from "./Root";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Details from "./Pages/Details/Details";
import UpdateProfile from "./Pages/Login/UpdateProfile";
import AddTouristSpot from "./Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "./Pages/AllTouristSpot/AllTouristSpot";
import MyListContainer from "./Pages/MyList/MyListContainer"; // Correct import
// import CountrySpots from "./Pages/CountrySpots/CountrySpots";
// import Countrys from "./Pages/Countrys/Countrys";
import AddCountry from "./Pages/AddCountry/AddCountry";
import CountrySpots from "./Pages/Countrys/CountrySpots";
// import UserAddCountry from "./Pages/AddCountry/UserAddCountry";
import UpdateList from "./Pages/MyList/UpdateList";
import CountrySpot from "./Pages/Countrys/CountrySpot";
import CountrySpotCardDetails from "./Pages/Countrys/CountrySpotCardDetails";
// const url = "/spotData.json";
const spotUrl = "http://localhost:5000/spot";
const countryUrl = "http://localhost:5000/country";
const userspotUrl ='http://localhost:5000/userspot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(spotUrl).then(response => response.json())
      },
      {
        path: "details/:id",
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch(`${spotUrl}/${params.id}`);
          return response.json();
        }
      },
      {
        path: "allTouristSpot",
        element: <AllTouristSpot />,
        loader: () => fetch(spotUrl).then(response => response.json())
      },
      {
        path: "addtouristspot",
        element: <PrivateRoute><AddTouristSpot /></PrivateRoute>,
      },
      // {
      //   path: "useraddtouristspot",
      //   element: <PrivateRoute><UserAddCountry/></PrivateRoute>,
      // },
      {
        path: "addcountry",
        element: <PrivateRoute><AddCountry/></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "updateProfile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "mylist",
        element: <PrivateRoute><MyListContainer /></PrivateRoute>, // Correct usage
        loader: () => fetch(userspotUrl).then(response => response.json())
      },
      {
        path: "country/:id",
        element: <CountrySpots />,
        loader: async ({ params }) => {
          const response = await fetch(`${countryUrl}/${params.id}`);
          return response.json();
        }
        
      },
      {
        path:'updatelist/:id',
        element:<UpdateList></UpdateList>,
        loader:({params}) =>fetch(`http://localhost:5000/userspot/${params.id}`)
        
    
      },
      {
        path: "country/:id",
        element: <CountrySpot />,
        loader: async () => {
            const response = await fetch('/spotData.json');
            const data = await response.json();
            return data;
        }
    },

    {
      path: "detail/:id",
      element: <CountrySpotCardDetails />,
      loader: async ({ params }) => {
      const response = await fetch('/spotData.json'); // Assuming spotData.json is accessible via the public directory or server route
      if (!response.ok) {
      throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Find the tourism spot details based on the id parameter
      const spotDetails = data.countries.flatMap(country => country.tourismSpots).find(spot => spot.id === parseInt(params.id));

      if (!spotDetails) {
      throw new Error('Tourism spot not found');
      }

      return spotDetails;
      },
    }

  
    
   
    
    
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
