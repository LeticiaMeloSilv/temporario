import { getCliente, getClientes, deleteCliente, putCliente,getAnimal,getAnimalPorDono,deleteAnimal,getaAnimais,postAnimal,putAnimal} from './exports.js'

'use strict'

//Pega o id fornecido pelo login pra dps usar ele em confirmacoes
const idPerfil = 2

// const idPerfil = localStorage.getItem('idusuario')
if (!idPerfil) {
    window.location.href = '../index.html'
}

const btn_criar=document.getElementById('btn_cadastrarPet')













'use strict'

async function cadastrarUsuario() {

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmaSenha = document.getElementById('confirmar').value
    let telefone = document.getElementById('telefone').value

    if (nome == '' || email == '' || senha == '' || confirmaSenha == '' || telefone == '') {
        alert('Preencha todos os campos')
    }
    else if (senha !== confirmaSenha) {
        alert('Senha incorreta')
    }
    else if(isNaN(telefone)){
        alert('verifique o numero de telefone')
    }
    else {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone
        }

        console.log(usuario)
        try {
            const url = 'http://localhost:8080/usuario'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            }

            const response = await fetch(url, options)
            console.log(response.ok);
            window.location.href = '../html/home.html'
            return response.ok
        }
        catch (error) {
            console.error(error)
        }
    }
}





















const telaNormal=document.getElementById('telaNormal')


function criarCard(animal) {

    const card = document.createElement('div')
    card.classList.add('flex','flex-col','items-center','bg-white','p-1.5','w-52','h-60','rounded-xl')
    // const id = animal.id
    //card.addEventListener('click', () => abriranimal(id));
    
    const iconeAnimal = document.createElement('img')
    iconeAnimal.src = animal.tipo.icon
    iconeAnimal.classList.add('self-end')

          
    const ImagemAnimal = document.createElement('img')
    ImagemAnimal.src = animal.img
    ImagemAnimal.classList.add('self-center','rounded-full')

    
        const nomeAnimal = document.createElement('h2')
        nomeAnimal.textContent = animal.nome
        nomeAnimal.classList.add('mt-2.5','text-xl','font-extrabold','self-center')
            
        const racaAnimal = document.createElement('h2')
        racaAnimal.textContent = animal.raca.nome
        racaAnimal.classList.add('self-center')
            



    const divnomeAnimal = document.createElement('div')
    divnomeAnimal.classList.add('flex','items-center')
    const ImagemAnimal = document.createElement('img')
    ImagemAnimal.src = './img/estrela.png'
    ImagemAnimal.classList.add('w-[23px]')

    const imagemanimal = document.createElement('img')
    imagemanimal.src = animal.img
    imagemanimal.classList.add('w-[125px]','flex','justify-center','items-center','self-center','mt-2.5')

    const nomeanimal = document.createElement('h3')
    nomeanimal.textContent = animal.nome
    nomeanimal.classList.add('mt-4','font-bold')

    const preco = document.createElement('h4')
    preco.classList.add('mt-3','text-violet-950')
    // .toFixed(2).replace('.', ',')
    preco.textContent = `R$ ${animal.preco}`
    
    const btn_comprar=document.createElement('button')
    btn_comprar.textContent='Adicionar'
    btn_comprar.classList.add('mt-5','w-auto','bg-slate-300','border','border-solid','border-violet-950','rounded-xl','py-2.5','px-11','text-violet-950')

    divnomeAnimal.replaceChildren(nomeAnimal,ImagemAnimal)
    card.replaceChildren(divnomeAnimal, imagemanimal,nomeanimal,preco,btn_comprar)
    telaNormal.appendChild(card)
    console.log(animal);

    return telaNormal
}



async function preencherContainer() {
    const container = document.querySelector('main')
    const animals = await getanimals()
    animals.forEach(animal => {
        const main = criarCard(animal)
        container.appendChild(telaNormal)
    });
}

preencherContainer()