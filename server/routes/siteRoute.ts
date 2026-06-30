import express from 'express'
import { createSite, getSite } from "../controllers/siteController.js";

const route = express.Router()

route.post('/', createSite)
route.get('/:username', getSite)

export default route
