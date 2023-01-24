const handleSubmit = async (e) => {
e.preventDefault()
const body = { words }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)

      })
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!')
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
}





///email index api

import {PrismaClient} from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
if (req.method === 'POST') {
return await createInquiry(req, res)
} else {
return res.status(405).json({ message: 'Method not allowed', success: false })
}
}

async function createInquiry(req, res) {
const body = req.body
try {
const newEntry = await prisma.signup.create({
data: {
email: body.email,
}
})
return res.status(200).json(newEntry, { success: true })
} catch (error) {
console.error('Request error', error)
res.status(500).json({ error: 'Error creating question', success: false })
}
}
