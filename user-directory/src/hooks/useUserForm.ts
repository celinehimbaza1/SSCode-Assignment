import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z
    .number({ required_error: 'Age is required', invalid_type_error: 'Must be a number' })
    .min(1, 'Age must be at least 1'),
});

export type FormData = z.infer<typeof schema>;

export const useUserForm = () => {
  return useForm<FormData>({
    resolver: zodResolver(schema),
  });
};
