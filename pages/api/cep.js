import { getCepInfos } from '../../services/cepService'

export default async function handler(req, res) {
  try{
    const { method, query } = req

    switch (method){
      case 'GET':
        const data = await getCepInfos(query.cep)
        res.status(200).send(data)
        break
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `Method ${method} not allowed`})
    }
  } catch (error){
    res.status(400).json({ message: error.message })
  }
}