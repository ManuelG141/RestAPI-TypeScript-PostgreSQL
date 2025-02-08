import express from 'express'
import * as userServices from '../services/users.services'

const router = express.Router()

// GET METHODS
router.get('/', userServices.getAllUsers) // WORKING

router.get('/:id', userServices.getUserById) // WORKING

// PUT METHODS
router.put('/:id', userServices.updateUser) // WORKING, UNCOMPLETE, VALIDATE USER IS MISSING

// POST METHODS
router.post('/', userServices.createUser) // WORKING, UNCOMPLETE, VALIDATE USER IS MISSING

// DELETE METHODS
router.delete('/:id', userServices.deleteUser) // WORKING

export default router
