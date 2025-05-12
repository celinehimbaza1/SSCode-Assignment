import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any | null>(null);
  const context = useContext(UserContext);

  useEffect(() => {
    if (context) {
      const foundUser = context.state.users.find((user) => user.id === id);
      setUser(foundUser || null);
    }
  }, [context, id]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;
