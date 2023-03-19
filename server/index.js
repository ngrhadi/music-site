import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

// const FileSync = require('lowdb/lib/adapters/MemorySync');

const app = express();
const port = 3004;

const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.write()
await db.read()
app.use(cors())
app.use(json());
app.use(morgan('dev'));

app.db = db;
app.get('/', (req, res) => {
  res.send({ message: 'SIMPLE API' })
});

app.post('/singin', async (req, res, next) => {
  try {
    const newUsers = {
      id: Math.random().toString,
      ...req.body
    };
    const { users } = await req.app.db.data

    users.push(newUsers);
    await db.write(newUsers).then(() => {
      res.send(newUsers)
    })
  } catch (error) {
    return res.status(500).send(error);
  }
})

app.post('/login', async (req, res, next) => {

  try {
    const { username, password } = req.body;
    console.log()
    const { users } = await req.app.db.data
    for (const user of users) {
      if (user.username !== username || user.password !== password) {
        res.status(500).send({
          message: "Invalid username or password"
        })
      } else {
        res.send({ message: 'sucessfully signed in' })
      }
    }
  } catch (error) {
    next(error)
  }
})

app.use('*', (req, res) => {
  res.send({ message: 'something went wrong' })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
