import { IContactsRequest, IContactsUpdate } from "../Interfaces/IContacts";

export interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: number;
  contact?: IContactsRequest;
  isAdmin?: boolean;
}

export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: number;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  contact?: IContactsRequest[];
}

export interface IUserUpdate {
  fullName?: string;
  email?: string;
  phoneNumber?: number;
  contact?: IContactsUpdate;
}
