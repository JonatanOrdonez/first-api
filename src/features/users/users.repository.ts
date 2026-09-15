import { CreateUserDTO, GetUsersDTO, UpdateUserDTO, User } from './users.types';
import Boom from '@hapi/boom';

let users: User[] = [];

export const getUserByIdRepository = async (id: string): Promise<User | undefined> => {
  return users.find((user) => user.id === id);
};

export const getUsersRepository = async (filters: GetUsersDTO): Promise<User[]> => {
  return users.filter((user) => {
    if (filters.name && user.name !== filters.name) {
      return false;
    }
    if (filters.age && user.age !== filters.age) {
      return false;
    }
    return true;
  });
};

export const createUserRepository = async (user: CreateUserDTO) :Promise<User> => {
  const newUser: User = {
    id: crypto.randomUUID(),
    name: user.name,
    age: user.age,
    email: user.email,
  };
  
  users.push(newUser);

  return newUser;
};

export const updateUserRepository = async (id: string, user: UpdateUserDTO): Promise<User> => {
  const userFound = users.find((user) => user.id === id);

  if(!userFound) {
    throw Boom.notFound('User not found');
  }

  const userUpdated: User = {
    ...userFound,
    age: user.age ?? userFound.age,
    name: user.name ?? userFound.name,
    email: user.email ?? userFound.email,
  };

  users = users.map((user) => user.id === id ? userUpdated : user);

  return userUpdated;
};

export const deleteUserRepository = async (id: string) : Promise<void> => {
  users = users.filter((user) => user.id !== id);
};