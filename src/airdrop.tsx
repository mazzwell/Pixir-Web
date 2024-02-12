import { useEffect, useState } from 'react';
import { getDatabase, ref, get, query, orderByChild, limitToLast } from "firebase/database";
import './styles/Home.css'

// Define a type for user data
type User = {
  evmAddress?: string; // Marking evmAddress as optional to handle cases where it might be undefined
  points: number;
};

function Section1() {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      const db = getDatabase();
      const usersRef = ref(db, 'busers');
      // Query the top 3 users based on points
      const topUsersQuery = query(usersRef, orderByChild('points'), limitToLast(3));

      const snapshot = await get(topUsersQuery);
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert the data object to an array of User objects and sort by points descending
        const usersArray: User[] = Object.values(data as Record<string, User>).sort((a, b) => b.points - a.points);
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
        <p>Total prize Pool 🔥 1.5M $Pixir</p>
      </div>
      <div className="container">
        <div className="flex-container">
          <div className="flex-item-left">
            <img className='nft' src='/ld.png' alt="NFT"/>
          </div>
          <div className="flex-item-right">
            <p> Referral Leaderboard </p>
            <div className="user-list">
              {topUsers.map((user, index) => {
                // Safely handle potentially undefined evmAddress
                const evmAddress = user.evmAddress || 'N/A'; // Fallback to 'N/A' if evmAddress is undefined
                const displayAddress = evmAddress.length > 10 ? `${evmAddress.slice(0, 6)}...${evmAddress.slice(-4)}` : evmAddress;
                return (
                  <div className="user-info" key={index}>
                    <span><a> {index + 1})</a></span>
                    <span><a> {displayAddress}</a></span>
                    <span><a>- {user.points} Points </a></span>
                  </div>
                );
              })}
            </div>
            <p> NFT Holder Leaderboard </p>
            <a href='https://polygonscan.com/token/0x8b2eb805A9066301959ecD7CfbD31b3F49d360cC#balances'   target="_blank"><button>View on PolygonScan</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
