import express from 'express';

const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
}

const users: User[] = [];

app.get('/', (req, res) => {
  res.status(201).send('Hello, world!');
});

app.get('/users', (req, res) => {
  const name = req.query.name;

  if(!name) {
    return res.json(users);
  }
  
  const filteredUser = users.filter((user) => user.name.includes(String(name)));
  return res.json(filteredUser);
});


app.post('/users', (req, res) => {
  const newUser: User = {
    id: Date.now(),
    name: req.body.name,
  };

  users.push(newUser);
  
  res.json(newUser);
});

const port: number = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});