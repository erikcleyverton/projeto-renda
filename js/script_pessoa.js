import {calculoDesconto} from './script_calculos.js'


//CRIAR UM ARRAY DE OBJETOS PESSOA

const pessoas = []

//PEGANDO ELEMENTOS DO DOM

const formPessoa = document.querySelector('#form-pessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO O EVENTO DO SUBMIT DO FORMULÁRIO

formPessoa.addEventListener('submit', (evt)=>{

    //INTERROMPENDO O EFEITO PADRAO DO FORMULARIO
    evt.preventDefault()

   //CRIANDO O OBJETO DATA FORM
    const dadosForm = new FormData(formPessoa)
    //CRIADO E PREENCHENDO O OBJETO LITERAL PESSOA
    const pessoa = {

        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }
    //CRIANDO A FUNCAO ADD PESSOA E PASSANDO O OBJETO LITERAL PESSOA
     addPessoa(pessoa)

  //LIMPANDO O FORMULARIO
   formPessoa.reset()
})
//FUNCOES PARA CROOD
//FUNÇAO PARA ADICIONAR PESSOA

const addPessoa = (objPessoa)=>{

    // ADICIONADO O OBJETO NO ARRAY pessoas, vindo do PARAMETRO DA FUNÇAO

    pessoas.push(objPessoa)
    listPessoa()

 }

//FUNÇÃO LISTAR PESSOA

 const listPessoa = () =>{

   //PErCORRENDO O ARRAY COM A ESTRUTURA DE REPETIÇAO FOREACH
    divPessoa.innerHTML = ''
    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'>${ i + 1 } - ${elem.nome} ${elem.idade} R$ ${
            parseFloat(elem.renda).toFixed(2).replace('.',',')}${calculoDesconto(elem)}</div>`
        })
    
     }