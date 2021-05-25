export default function checkUserParams(body){
    if(body.name == null || body.name == "")
        throw new Error('Fill the name field')
    
    if(body.email == null || body.email == "")
        throw new Error('Fill the e-mail field')
    
    validEmail(body.email)
    return true
}

function validEmail(email){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(email.match(pattern))
        return true
    else
        throw new Error('Invalid e-mail address')
}