import * as utils from '../services/utils.services'
import { User } from '../types'
import { pool } from './db'
import { Request, Response } from 'express'

// TODO, PASS THE COMPLETE FUNCTIONS HERE

export const getAllUsers = async (_req: Request<any>, res: Response<any>): Promise<void> => { // WORKING
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM users;')
    client.release()

    res.send(result.rows)
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal server error')
  }
}

export const getUserById = async (req: Request<any>, res: Response<any>): Promise<void> => { // WORKING
  if (!utils.isValidId(req.params.id)) {
    res.status(400).send('Invalid id, provide a numeric id')
  } else {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM users WHERE id = $1;', [req.params.id])
      client.release()

      if (result.rowCount === 0) {
        res.status(404).send('Resource not found')
      } else {
        const user: User = {
          id: result.rows[0].id,
          name: result.rows[0].name,
          email: result.rows[0].email,
          created_at: result.rows[0].created_at
        }

        res.send(user)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal server error')
    }
  }
}

// UNCOMPLETE, VALIDATE USER IS MISSING
export const updateUser = async (req: Request<any>, res: Response<any>): Promise<void> => {
  if (!utils.isValidId(req.params.id)) {
    res.status(400).send('Invalid id, provide a numeric id')
  } else {
    // VALIDATE THE BODY STUFF ...
    const validUser = true

    if (!validUser) { // If the user is not valid
      res.status(400).send('Invalid user')
    } else { // If user is valid
      try {
        const client = await pool.connect()
        const result = await client.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;', [req.body.name, req.body.email, req.params.id])
        client.release()

        if (result.rowCount === 0) {
          res.status(404).send('Resource not found')
        } else {
          const entry: User = {
            id: result.rows[0].id,
            name: result.rows[0].name,
            email: result.rows[0].email,
            created_at: result.rows[0].created_at
          }

          res.send(entry)
        }
      } catch (error: any) {
        if (error.code === '23505') {
          res.status(409).send('Email already in use')
        } else {
          console.log(error)
          res.status(500).send('Internal server error ' + (error.detail as string))
        }
      }
    }
  }
}

// UNCOMPLETE, VALIDATE USER IS MISSING
export const createUser = async (req: Request<any>, res: Response<any>): Promise<void> => {
  // VALIDATE THE BODY STUFF ...
  const validUser = true

  if (!validUser) { // If the user is not valid
    res.status(400).send('Invalid user')
  } else { // If user is valid
    try {
      const client = await pool.connect()
      const result = await client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;', [req.body.name, req.body.email])
      client.release()

      const entry: User = {
        id: result.rows[0].id,
        name: result.rows[0].name,
        email: result.rows[0].email,
        created_at: result.rows[0].created_at
      }

      res.send(entry)
    } catch (error: any) {
      if (error.code === '23505') {
        res.status(409).send('Email already in use')
      } else {
        console.log(error)
        res.status(500).send('Internal server error ' + (error.detail as string))
      }
    }
  }
}

export const deleteUser = async (id: number): Promise<User | undefined> => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id])
  client.release()

  if (result.rowCount === 0) {
    return undefined
  }

  const entry: User = {
    id: result.rows[0].id,
    name: result.rows[0].name,
    email: result.rows[0].email,
    created_at: result.rows[0].created_at
  }

  return entry
}
