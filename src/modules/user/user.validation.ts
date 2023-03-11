import Joi from 'joi';
import { password, objectId } from '../validate/custom.validation';
import { NewCreatedUser } from './user.interfaces';

const createUserBody: Record<keyof NewCreatedUser, any> = {
  email: Joi.string().required().email(),
  password: Joi.string().required().custom(password),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string().required().valid('user', 'admin'),
  profileUrl: Joi.string().optional(),
  isVerified: Joi.boolean().optional(),
  headline: Joi.string().optional(),
  summary: Joi.string().optional(),
  location:Joi.string().optional(),
  instagramLink: Joi.string().optional(),
  behanceLink: Joi.string().optional(),
  skills: Joi.array().optional(),
  portfolio: Joi.array().optional(),
  certifications: Joi.array().optional(),
  jobPreferences: Joi.array().optional(),
  educations: Joi.array().optional(),
};

export const createUser = {
  body: Joi.object().keys(createUserBody),
};

export const getUsers = {
  query: Joi.object().keys({
    skills: Joi.string(),
    email: Joi.string().email(),
    firstName: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getCategories = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

export const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

export const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
