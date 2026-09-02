import Boom from '@hapi/boom';
import { Request, Response } from 'express';
import { createUserService, getUserByIdService, getUsersService } from './users.service';

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
  if(!req.body.name) {
    throw Boom.badRequest('Name is required');
  }

  if(!req.body.age || isNaN(req.body.age)) {
    throw Boom.badRequest('Valid age is required');
  }

  const newUser = await createUserService({
    name: req.body.name,
    age: req.body.age,
  });

  res.status(201).json(newUser);
};