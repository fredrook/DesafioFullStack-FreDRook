export interface IContactsRequest {
  fullName: string;
  email: string;
  phoneNumber: number;
  createdAt: Date;
  isAdmin: boolean;
}

export interface IContactsUpdate {
  fullName?: string;
  email?: string;
  phoneNumber?: number;
  createdAt?: Date;
  isAdmin?: boolean;
}
