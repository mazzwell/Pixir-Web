import { useEffect, useState } from 'react';
import { getDatabase, ref, get, query, orderByChild, limitToLast } from "firebase/database";
import './App.css';

// Define a type for user data
type User = {
  evmAddress: string;
  points: number;
};


function Home() {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      const db = getDatabase();
      const usersRef = ref(db, 'users');
      // Query the top 3 users based on points
      const topUsersQuery = query(usersRef, orderByChild('points'), limitToLast(3));

      const snapshot = await get(topUsersQuery);
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert the data object to an array of User objects and sort by points descending
        const usersArray = Object.values(data as Record<string, User>) // Assert data as an object of user records
  .sort((a, b) => b.points - a.points);
        setTopUsers(usersArray);
      } else {
        console.log("No data available");
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <>
      <div className="pagecontainer">
        <h1>LeaderBoard</h1>
        <p>Total price Pool 🔥 1M $Pixir</p>
      </div>
      <div className="container">
        <div className="flex-container">
          <div className="flex-item-left">
            <img className='nft' src='/ld.png' alt="NFT"/>
          </div><div className="flex-item-right">
  <p>The leaderboard refreshes every 24 hours</p>
  <div className="user-list">
    {topUsers.map((user, index) => {
      const displayAddress = `${user.evmAddress.slice(0, 6)}...${user.evmAddress.slice(-4)}`;
      return (
        <div className="user-info" key={index}>
          <span>{index + 1})</span>
          <span>{displayAddress}</span>
          <span>- {user.points} Points</span>
        </div>
      );
    })}
  </div>
</div>
   
        </div>
      </div>
    </>
  );
}

export default Home;
