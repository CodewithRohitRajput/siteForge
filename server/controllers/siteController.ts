import Site from "../models/site.js";
import type { Request, Response } from "express";

// 

export const createSite = async (req: Request, res: Response) => {
    const site = await Site.create(req.body)
    res.status(201).json({message : "Site created successfully"})
}

export const getSite = async (req: Request, res: Response) => {
    const {username} = req.params
    const site = await Site.findOne({username})
    if(!site) {
        return res.status(404).json({message : "Site not found"})
    }
    res.status(200).json({data: site})
}

export default  {
    createSite,
    getSite
}