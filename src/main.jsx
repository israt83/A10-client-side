


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
import MyListContainer from "./Pages/MyList/MyListContainer"; 

import AddCountry from "./Pages/AddCountry/AddCountry";
import CountrySpots from "./Pages/Countrys/CountrySpots";

import UpdateList from "./Pages/MyList/UpdateList";
import CountrySpot from "./Pages/Countrys/CountrySpot";
import CountrySpotCardDetails from "./Pages/Countrys/CountrySpotCardDetails";

const spotUrl = "https://tourism-spot-server.vercel.app/spot";
const countryUrl = "https://tourism-spot-server.vercel.app/country";
const userspotUrl ='https://tourism-spot-server.vercel.app/userspot';





const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch(spotUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Fetching error:', error);
            throw error; 
          }
        }
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
        element: <PrivateRoute><MyListContainer /></PrivateRoute>, 
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
        loader:({params}) =>fetch(`http://localhost:3000/userspot/${params.id}`)
        
    
      },
      {
        path: "country/:id",
        element: <CountrySpot />,
        loader: async () => {
            const response = await fetch('http://localhost:3000/countryspot');
            const data = await response.json();
            return data;
        }
    },

    {
      path: "detail/:id",
      element: <CountrySpotCardDetails />,
      loader: async ({ params }) => {
      const response = await fetch('http://localhost:3000/countryspot'); 
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
// import MyListContainer from "./Pages/MyList/MyListContainer";
// import AddCountry from "./Pages/AddCountry/AddCountry";
// import CountrySpots from "./Pages/Countrys/CountrySpots";
// import UpdateList from "./Pages/MyList/UpdateList";
// import CountrySpot from "./Pages/Countrys/CountrySpot";
// import CountrySpotCardDetails from "./Pages/Countrys/CountrySpotCardDetails";

// const spotUrl = "https://tourism-store-server.vercel.app/spot";
// const countryUrl = "https://tourism-store-server.vercel.app/country";
// const userspotUrl = 'https://tourism-store-server.vercel.app/userspot';

// const fetchData = async (url) => {
//   try {
//     console.log(`Fetching data from ${url}`);
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error(`Error: Received status ${response.status} from ${url}`);
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log('Data fetched successfully:', data);
//     return data;
//   } catch (error) {
//     console.error("Failed to load data:", error);
//     throw error;
//   }
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: () => fetchData(spotUrl)
//       },
//       {
//         path: "details/:id",
//         element: <PrivateRoute><Details /></PrivateRoute>,
//         loader: async ({ params }) => fetchData(`${spotUrl}/${params.id}`)
//       },
//       {
//         path: "allTouristSpot",
//         element: <AllTouristSpot />,
//         loader: () => fetchData(spotUrl)
//       },
//       {
//         path: "addtouristspot",
//         element: <PrivateRoute><AddTouristSpot /></PrivateRoute>,
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
//         element: <PrivateRoute><MyListContainer /></PrivateRoute>, 
//         loader: () => fetchData(userspotUrl)
//       },
//       {
//         path: "country/:id",
//         element: <CountrySpots />,
//         loader: async ({ params }) => fetchData(`${countryUrl}/${params.id}`)
//       },
//       {
//         path: 'updatelist/:id',
//         element: <UpdateList />,
//         loader: ({ params }) => fetchData(`${userspotUrl}/${params.id}`)
//       },
//       {
//         path: "country/:id",
//         element: <CountrySpot />,
//         loader: () => fetchData('https://tourism-store-server.vercel.app/countryspot')
//       },
//       {
//         path: "detail/:id",
//         element: <CountrySpotCardDetails />,
//         loader: async ({ params }) => {
//           const data = await fetchData('https://tourism-store-server.vercel.app/countryspot');
//           const spotDetails = data.countries.flatMap(country => country.tourismSpots).find(spot => spot.id === parseInt(params.id));
//           if (!spotDetails) {
//             throw new Error('Tourism spot not found');
//           }
//           return spotDetails;
//         },
//       }
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


