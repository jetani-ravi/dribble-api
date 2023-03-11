import mongoose, { Model, Document, Date } from 'mongoose';
import { QueryResult } from '../paginate/paginate';
import { AccessAndRefreshTokens } from '../token/token.interfaces';



export interface IPortfolio {
  url: string;
  tags: string[];
}

export interface IEducations {
  courseName: string;
  university: string;
  country: string;
  startYear: number;
  endYear: number;
}

export interface ICertifications {
  certificateName: string;
  course: string;
  provider: string;
  date: Date;
}

export interface IUser {
  profileUrl?: string;
  firstName: string;
  lastName: string;
  headline?: string;
  summary?: string;
  location?: string;
  instagramLink?: string;
  behanceLink?: string;
  jobPreferences:string[];
  skills?: string[];
  certifications?: ICertifications,
  educations?: IEducations,
  portfolio?: IPortfolio,
  email: string;
  password: string;
  role: string;
  isVerified?: boolean;
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDoc> {
  isEmailTaken(email: string, excludeUserId?: mongoose.Types.ObjectId): Promise<boolean>;
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type UpdateUserBody = Partial<IUser>;

export type NewRegisteredUser = Omit<IUser, 'role' | 'isVerified'>;

export type NewCreatedUser = IUser

export interface IUserWithTokens {
  user: IUserDoc;
  tokens: AccessAndRefreshTokens;
}
