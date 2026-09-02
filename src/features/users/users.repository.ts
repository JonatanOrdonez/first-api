import { CreateUserDTO, GetUsersDTO, User } from './users.types';

const users: User[] = [];

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
  };
  
  users.push(newUser);

  return newUser;
};