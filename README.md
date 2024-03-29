# Pixir.Fun Project 🌐

Calling all crypto hunters! Pixir is your ultimate playground. Compete in exhilarating treasure hunts, gather one-of-a-kind NFTs, and unravel hidden secrets. Each task fuels your progress, pushing you closer to uncovering the ultimate prize. If you're seeking a fun and engaging way to explore the NFT universe, Pixir is your perfect adventure

## 🚀 Getting Started

### Clone the Project

```Npm
git clone https://github.com/mazzwell/Pixir-Web

npm install
```

Designed to integrate seamlessly with EVM blockchain, our system offers a robust platform for managing NFT drops, user authentication, and referral tracking.
Thanks to Thirdweb Powerful SDK.

### Key Features

- NFT Minting and Distribution: One click Way
- Leaderboard System: Real-time tracking and display of top NFT holders and referrers.
- Web3 Authentication: WalletConnect By Thirdweb
- Referral System: Points accumulation for users referring new participants. 
- Dtabase System: Fireebase realtime database. 

## Environment Variables

To run this project, you will need to add environment variables. Create Env file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

- VITE_TEMPLATE_CLIENT_ID=YourThirdwebClientID
- VITE_FIREBASE_API_KEY=YourFirebaseAPIKey
- VITE_FIREBASE_AUTH_DOMAIN=YourFirebaseAuthDomain
- VITE_FIREBASE_DATABASE_URL=YourFirebaseDatabaseURL
- VITE_FIREBASE_PROJECT_ID=YourFirebaseProjectID
- VITE_FIREBASE_STORAGE_BUCKET=YourFirebaseStorageBucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=YourFirebaseMessagingSenderID
- VITE_FIREBASE_APP_ID=YourFirebaseAppID
- VITE_FIREBASE_MEASUREMENT_ID=YourFirebaseMeasurementID


### Firebase Realtime DB Rule

```Firebase DB rule
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
     "busers": {
      ".indexOn": ["points"],
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

### Make to set up the twitter auth in firebase

## Technology Stack

Pixir is built with the latest web technologies for a seamless and responsive user experience:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing development efficiency and code quality.


## Dependencies

Our project is built with a range of modern web development tools and libraries:
Here is some core dependencies

- `@react-firebase/auth`: For integrating Firebase authentication.
- `@thirdweb-dev/react` & `@thirdweb-dev/sdk`: To interact with Blast blockchain and manage NFTs.
- `ethers`: Ethereum wallet and blockchain interaction.
- `firebase`: Backend service for authentication and data storage.
- `react`, `react-dom`, `react-router-dom`: Frontend library and routing.
- `typed.js`: For animated typing effects.

Rest of the dependencies available on package.json

## Contact us
Email pixirnft@gmail.com

## Learn More

To learn more about thirdweb, Vite and React, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/react) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - check our guides and development resources.
- [Vite Documentation](https://vitejs.dev/guide/) - learn about Vite features.
- [React documentation](https://reactjs.org/) - learn React.

For any questions, suggestions, Email pixirnft@gmail.com

