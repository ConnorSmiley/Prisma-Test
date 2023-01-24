import {PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async(req:NextApiRequest, res:NextApiResponse) => {
  const data = JSON.parse(req.body)

  const createEmail = await prisma.signup.create({
    data: {
      email : data
    }
  })

  res.json(createEmail)
}
