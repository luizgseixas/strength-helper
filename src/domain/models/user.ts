export type User = {
  name: string;
  email: string;
  document: string;
  phone?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
