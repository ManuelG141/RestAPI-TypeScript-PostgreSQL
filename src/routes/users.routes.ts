import express from 'express'
import * as userServices from '../services/users.services'
import * as utils from '../services/utils.services'

const router = express.Router()

// TUTORIAL: https://www.youtube.com/watch?v=OtxEG8TIEcE

// TODO, PASS THE COMPLETE FUNCTIONS TO USER.SERVICES.TS
// THEY SHOULD BE LIKE THIS:
// router.get('/', getAllUsers)

// GET METHODS
router.get('/', userServices.getAllUsers) // WORKING

router.get('/:id', userServices.getUserById) // WORKING

// PUT METHODS
router.put('/:id', userServices.updateUser) // WORKING, UNCOMPLETE, VALIDATE USER IS MISSING

// POST METHODS
router.post('/', userServices.createUser) // WORKING, UNCOMPLETE, VALIDATE USER IS MISSING

// DELETE METHODS
router.delete('/:id', (req, res) => { // WORKING
  if (!utils.isValidId(req.params.id)) {
    res.status(400).send('Invalid id, provide a numeric id')
  } else {
    void userServices.deleteUser(Number(req.params.id)).then((result) => {
      if (result != null) {
        res.send(result)
      } else {
        res.status(404).send('Resource not found')
      }
    }, (error) => {
      console.log(error)
      res.status(500).send('Internal server error')
    })
  }
})

export default router
