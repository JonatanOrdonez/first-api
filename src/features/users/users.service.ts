import { createUserRepository, deleteUserRepository, getUserByIdRepository, getUsersRepository, updateUserRepository } from './users.repository';
import { CreateUserDTO, GetUsersDTO, UpdateUserDTO, User } from './users.types';
import Boom from '@hapi/boom';

export const getUsersService = async (filters: GetUsersDTO): Promise<User[]> => {
  const users = await getUsersRepository(filters);
  return users;
};

export const getUserByIdService = async (id: string): Promise<User> => {
  const user = await getUserByIdRepository(id);

  if(!user) {
    throw Boom.notFound('User not found');
  }

  return user;
};

export const createUserService = async (user: CreateUserDTO): Promise<User> => {
  if(user.age < 18) {
    throw Boom.badRequest('User must be at least 18 years old');
  }

  const newUser = await createUserRepository(user);

  return newUser;
};

export const updateUserService = async (id: string, user: UpdateUserDTO): Promise<User> => {
  const userFound = await getUserByIdRepository(id);

  if(!userFound) {
    throw Boom.notFound('User not found');
  }

  const userUpdated = await updateUserRepository(id, user);

  return userUpdated;
};

export const deleteUserService =  async (id: string) : Promise<void> => {
  const userFound = await getUserByIdRepository(id);

  if(!userFound) {
    throw Boom.notFound('User not found');
  }

  await deleteUserRepository(id);
};