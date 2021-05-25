import { checkUserParams } from '../../util/requestUtil'

export default function handler(req, res) {
  try{  
    const { method, body } = req

    switch (method){
      case 'POST':
        checkUserParams(body) 
        res.status(200).json({name: body.name, email: body.email})
        break
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).json({message: `Method ${method} not allowed`})
    }
  } catch (error){
    res.status(422).json({ message: error.message })
  }
}