import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth, twitterProvider } from './firebase';
import Task from './task';

const TwitterLoginButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleTwitterLogin = async () => {
    try {
      const { signInWithPopup } = await import('firebase/auth');
      const result = await signInWithPopup(auth, twitterProvider);
      console.log('Twitter login result:', result);
      setUser(result.user);
    } catch (error) {
      console.error('Twitter login error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <>
          Welcome, {user.displayName || 'User'}!
          <Task />
        </>
      ) : (
        <button onClick={handleTwitterLogin}>
          Login with Twitter
        </button>
      )}
    </div>
  );
};
export default TwitterLoginButton;