import fs from 'fs'
import { create, globSource } from 'ipfs-http-client'
import { NextApiRequest, NextApiResponse } from 'next'

// Connceting to the ipfs network via infura gateway
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const testFile = fs.readFileSync(
    'C:/Users/juanv/Projects/cryptologic-front-challenge/src/pages/api/ipfs/files/eliot.jpeg'
  )
  //Creating buffer for ipfs function to add file to the system
  const testBuffer = Buffer.from(testFile)
  console.log(__dirname)
  const file = await ipfs.add(testBuffer)
  console.log('> file: ', file)

  const ipfsFile = await ipfs.cat(file.path)

  console.log('> ipfsFile: ', ipfsFile)

  let content: number[] = []
  for await (const chunk of ipfsFile) {
    content = [...content, ...chunk]
  }

  res.status(200).json({ ipfsFile: content })
}
