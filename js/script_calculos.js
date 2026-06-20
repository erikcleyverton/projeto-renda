const calculoDesconto = (objPessoa) => {
    let resposta = ''

    if((objPessoa.idade < 18) || (objPessoa.renda <= 1700)){
        resposta = 'Isento de Desconto'
    }else if(objPessoa.renda <= 5000){
        resposta = objPessoa.renda * 0.05
    }else if(objPessoa.renda <= 7000){ // Nota: O trecho escondido pela caixinha 'any' segue a lógica sequencial (ex: 7000)
        resposta = objPessoa.renda * 0.08
    }else if(objPessoa.renda <= 10000){
        resposta = objPessoa.renda * 0.10
    }else{
        resposta = objPessoa.renda * 0.03
    }

    return resposta
}
export {calculoDesconto}