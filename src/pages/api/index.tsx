/*
import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, dateCreated } = req.body;
  const result = await prisma.Email.create({
    data: {
      email, dateCreated,
    }
  });
  res.json(result);
};


export default handler;
*/
