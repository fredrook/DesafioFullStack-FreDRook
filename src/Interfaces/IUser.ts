/* import { IAddressRequest, IAddressUpdate } from "../address" */

export interface IUser {
  completeName: string;
  email: string;
  phoneNumber: number;
  isAdmin: boolean;
  isActive: boolean;
  registerDate: Date;
  updatedAt: Date;
  /* clientContacts: IAddressRequest */
}
export interface IUserRequest {
  completeName: string;
  email: string;
  phoneNumber: number;
  registerDate: Date;
  /* clientContacts: IAddressRequest */
  isAdmin?: boolean;
}

export interface IUserUpdate {
  completeName?: string;
  email?: string;
  phoneNumber?: number;
  registerDate?: string;
  /* clientContacts?: IAddressRequest */
  isAdmin?: boolean;
}
