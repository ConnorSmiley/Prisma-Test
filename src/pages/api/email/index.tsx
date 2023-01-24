

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export default async(req, res) => {
  const data = JSON.parse(req.body)

  const createdMovie = await prisma.signup.create({
    data: {
      email : data
    }
  })

  res.json(createdMovie)
}
