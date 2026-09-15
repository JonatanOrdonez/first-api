export interface User {
  id: string;
  userName: string;
  age: number;
  email: string;
}

export interface GetUsersDTO {
  userName?: string;
  age?: number;
  email?: string;
}

export interface CreateUserDTO {
  userName: string;
  age: number;
  email: string;
}

export interface UpdateUserDTO {
  userName?: string;
  age?: number;
  email?: string;
}