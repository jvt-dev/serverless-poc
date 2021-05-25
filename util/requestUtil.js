export function checkUserParams(body){
    if(body.name == null || body.name == "")
        throw new Error('Fill the name field')
    
    if(body.email == null || body.email == "")
        throw new Error('Fill the e-mail field')
    
    emailValidator(body.email)
    return true
}

export function checkCepParams(cep){
    if(cep == null || cep == "")
        throw new Error("Fill the cep field")

    return cepCleaner(cep)
}

function cepCleaner(cep){
    var cleanedCep = cep.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return cleanedCep
}

function emailValidator(email){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(email.match(pattern))
        return true
    else
        throw new Error('Invalid e-mail address')
}