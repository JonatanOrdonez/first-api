export interface User {
  id: string;
  name: string;
  age: number;
}

export interface GetUsersDTO {
  name?: string;
  age?: number;
}

export interface CreateUserDTO {
  name: string;
  age: number;
}