import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../context/UserContext';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().min(1, 'Age is required').int(),
});

const AddUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const context = useContext(UserContext);
  if (!context) return <div>Loading...</div>;

  const { dispatch } = context;

  const onSubmit = (data: any) => {
    dispatch({
      type: 'ADD_USER',
      payload: { id: Date.now().toString(), name: data.name, age: data.age },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          {...register('name')}
          className="border p-2"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          {...register('age')}
          className="border p-2"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Add User</button>
    </form>
  );
};

export default AddUser;
