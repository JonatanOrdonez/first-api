import Boom from '@hapi/boom';
import { Request, Response } from 'express';
import { createUserService, deleteUserService, getUserByIdService, getUsersService, updateUserService } from './users.service';

export const getUserByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserByIdService(String(id));
  res.status(200).json(user);
};

export const getUsersController = async (req: Request, res: Response) => {
  const filters = req.query;
  const users = await getUsersService(filters);
  res.status(200).json(users);
};


export const createUserController = async (req: Request, res: Response) => {
  if(!req.body.userName) {
    throw Boom.badRequest('Name is required');
  }

  if(!req.body.age || isNaN(req.body.age)) {
    throw Boom.badRequest('Valid age is required');
  }

  if(!req.body.email) {
    throw Boom.badRequest('Email is required');
  }

  const newUser = await createUserService({
    userName: req.body.userName,
    age: req.body.age,
    email: req.body.email,
  });

  res.status(201).json(newUser);
};

export const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userUpdated = await updateUserService(String(id), req.body);
  res.status(200).json(userUpdated);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUserService(String(id));
  res.status(204).send();
};