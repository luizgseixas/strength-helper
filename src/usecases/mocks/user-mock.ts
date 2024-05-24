import { User } from '../../domain/models';

export const mockUser: User = {
  id: 'any_user_id',
  name: 'any_name',
  document: 'any_document',
  email: 'any_email',
  phone: 'any_phone',
  password: 'any_hashed_password',
  createdAt: new Date('2024-05-16').toISOString(),
  updatedAt: new Date('2024-05-16').toISOString()
};
