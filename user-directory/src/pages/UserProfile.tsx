import { useParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';

export default function UserProfile() {
  const { id } = useParams();
  const { state } = useUsers();

  const user = state.users.find((u) => u.id === id);

  if (!user) return <p className="text-center mt-10">User not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    </div>
  );
}
