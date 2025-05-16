// src/pages/HomePage.tsx

import { useEffect } from 'react';
import { useUsers } from '../hooks/useUsers';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { state, dispatch } = useUsers();

  useEffect(() => {
    // Load users only if list is empty (so added users remain)
    if (state.users.length === 0) {
      const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        const formatted = data.slice(0, 6).map((u: any, i: number) => ({
          id: u.id.toString(),
          name: u.name,
          email: u.email,
          age: 20 + (i + 1),
        }));
        dispatch({ type: 'SET_USERS', payload: formatted });
      };
      fetchUsers();
    }
  }, [dispatch, state.users.length]);

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">User Directory</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
            </div>
            <div className="flex justify-between mt-4">
              <Link to={`/user/${user.id}`} className="text-blue-600 hover:underline">
                View user details
              </Link>
              <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/add"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add New User
        </Link>
      </div>
    </div>
  );
}
