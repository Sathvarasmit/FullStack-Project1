import {Router} from 'express'
import { registeUser } from '../controllers/user.controllers.js'


const router = Router()
router.route("/register").post(registeUser)

export default router