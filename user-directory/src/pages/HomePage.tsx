import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const HomePage = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log('Fetched users:', data); // Log the fetched users to verify if data is received
      dispatch({ type: 'SET_USERS', payload: data });
    }

    if (state.users.length === 0) {
      fetchUsers();
    }
  }, [dispatch, state.users.length]);

  console.log('Users in state:', state.users);  // Log the users from the context state

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>

      <ul className="space-y-4">
        {state.users.map((user: any) => (
          <li key={user.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <Link to={`/users/${user.id}`} className="text-blue-500 hover:underline text-sm">
              View Profile
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          to="/add-user"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Add New User
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
