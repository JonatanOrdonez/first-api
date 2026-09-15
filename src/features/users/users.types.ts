export interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

export interface GetUsersDTO {
  name?: string;
  age?: number;
  email?: string;
}

export interface CreateUserDTO {
  name: string;
  age: number;
  email: string;
}

export interface UpdateUserDTO {
  name?: string;
  age?: number;
  email?: string;
}