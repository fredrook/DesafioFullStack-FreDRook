export interface IContactsRequest {
  id: string
  fullName: string;
  email: string;
  phoneNumber: number;
  createdAt?: Date;
  userId?: string;
}

export interface IContactsUpdate {
  fullName?: string;
  email?: string;
  phoneNumber?: number;
  createdAt?: Date;
  userId?: string
}
