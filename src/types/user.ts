export interface User {
  id: string;
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  role: Role;
  createdAt: Date;
  lastUpdated: Date;
}

export type Role = 'admin' | 'editor' | 'user';