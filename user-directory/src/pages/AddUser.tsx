import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUsers } from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(1, 'Age is required'),
});

type FormData = z.infer<typeof schema>;

export default function AddUser() {
  const { dispatch } = useUsers();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch({
      type: 'ADD_USER',
      payload: {
        id: Date.now().toString(),
        ...data,
      },
    });
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label>Name</label>
          <input {...register('name')} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email')} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register('age', { valueAsNumber: true })} className="w-full border p-2 rounded" />
          {errors.age && <p className="text-red-600">{errors.age.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Create User
        </button>
      </form>
    </div>
  );
}
