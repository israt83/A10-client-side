

import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import MyList from './MyList';

function MyListContainer() {
  const loadedUserSpots = useLoaderData();
  const [userSpots, setUserSpots] = useState(loadedUserSpots);

  return (
    <div className='m-28'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-48'>
        {userSpots.map(userSpot => (
          <MyList
            key={userSpot._id}
            userSpot={userSpot}
            userSpots={userSpots}
            setUserSpots={setUserSpots}
          />
        ))}
      </div>
    </div>
  );
}

export default MyListContainer;
