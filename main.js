
'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Fernando" ,
    email: "Fernando@gmail.com" ,
    celular: "112548935587" , 
    cidade: "São Roque"
}

const createClient = (client) => {
    localStorage.setItem("id", "111")
}




document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)