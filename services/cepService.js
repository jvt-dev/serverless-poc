import axios from 'axios' 
import { checkCepParams } from '../util/requestUtil'

export const getCepInfos = async (cep) =>{
    try{
    const cleanedCep = checkCepParams(cep)
    const response = await axios.get(`https://viacep.com.br/ws/${ cleanedCep }/json/`)

    const cepData = {
        ...response.data
    }

    return cepData
    } catch (err){
        throw new Error(err.message)
    }
}