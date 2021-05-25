import checkUserParams from '../../util/requestUtil'

export default function handler(req, res) {
  try{  
    const { method, body } = req

    switch (method){
      case 'GET':
        checkUserParams(body)
        res.status(200).json({name: checkedParams.name, email: checkedParams.email})
        break
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `Método ${method} não permitido`})
    }
  } catch (error){
    res.status(422).json({ message: error.message })
  }
}