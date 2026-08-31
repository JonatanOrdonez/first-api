import {Router} from 'express';
import Boom from '@hapi/boom';
import {User} from './users.types';

const router = Router();

const users: User[] = [];

router.get('/', (req, res) => {
  const name = req.query.name;

  if(!name) {
    return res.json(users);
  }
  
  const filteredUser = users.filter((user) => user.name.includes(String(name)));
  return res.json(filteredUser);
});

router.post('/', (req, res) => {
  if(!req.body.name) {
    throw Boom.badRequest('Name is required');
  }

  const newUser: User = {
    id: Date.now(),
    name: req.body.name,
  };

  users.push(newUser);
  
  res.json(newUser);
});

export default router;