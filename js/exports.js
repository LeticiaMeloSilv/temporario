// const link = `https://laika-back.onrender.com`
const versao = "v1"
const url = `http://localhost:8080/`

export async function getProdutos() {
    const link = `${url}/${versao}/laika/produtos`
    const response=await fetch(link)
    const data=await response.json()
    
    return data.produtos
}
export async function getProduto(id) {
    const link =`${url}/${versao}/laika/produto/${id}`
    const response=await fetch(link)
    const data= await response.json()
    return data.Produto[0]
}
/*export async function getProdutoFiltro(filtro) {
    const link =`http://localhost:8080/V2/ACMEProdutos/Produtos/filtro?nome=${filtro}`
    const response=await fetch(link)
    const data= await response.json()
    return data.Produto
}

export async function postProduto(Produto) {
    const link=`http://localhost:8080/V2/ACMEProdutos/Produto`
    const options={
        method:`POST`,
        headers:{
            `Content-type`:`application/json`
        },
        body:JSON.stringify(Produto)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function putProduto(Produto,id) {
    const link=`http://localhost:8080/V2/ACMEProdutos/Produto/${id}`
    const options={
        method:`PUT`,
        headers:{
            `Content-type`:`application/json`
        },
        body:JSON.stringify(Produto)
    }
    console.log(Produto);
    const response=await fetch(url,options)
    console.log(response);
    console.log(response.ok);
    return response.ok
}
export async function deleteProduto(id) {
    const link=`http://localhost:8080/V2/ACMEProdutos/Produto/${id}`
    const options={
        method:`DELETE`
    }
    const response=await fetch(url,options)
    return response.ok
}*/
export async function getClientes() {
    const link = `${url}/${versao}/laika/clientes`
    const response=await fetch(link)
    const data=await response.json()
    
    return data.clientes
}
export async function getCliente(id) {
    const link =`${url}/${versao}/laika/cliente/${id}`
    
    const response=await fetch(link)
    const data= await response.json()    
    
    return data.dados
}
/*export async function getClienteFiltro(filtro) {
    const link =`http://localhost:8080/V2/ACMEClientes/Clientes/filtro?nome=${filtro}`
    const response=await fetch(link)
    const data= await response.json()
    return data.Cliente
}

export async function postCliente(Cliente) {
    const link=`http://localhost:8080/V2/ACMEClientes/Cliente`
    const options={
        method:`POST`,
        headers:{
            `Content-type`:`application/json`
        },
        body:JSON.stringify(Cliente)
    }
    const response=await fetch(url,options)
    return response.ok
}
*/
export async function putCliente(cliente,id) {
    const link=`${url}/${versao}/laika/cliente/${id}`
    const options={
        method:`PUT`,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(cliente)
    }
    const response=await fetch(url,options)
    console.log(response);
    console.log(response.ok);
    return response.ok
}
export async function deleteCliente(id) {
    const link=`${url}/${versao}/laika/cliente/${id}`
    const options={
        method:`DELETE`
    }
    const response=await fetch(url,options)
    return response.ok
}















export async function getaAnimais() {
    const link = `${url}/${versao}/laika/animais`
    const response=await fetch(link)
    const data=await response.json()
    
    return data.animais
}
export async function getAnimal(id) {
    const link =`${url}/${versao}/laika/animal/${id}`
    
    const response=await fetch(link)
    const data= await response.json()    
    
    return data.dados
}
export async function getAnimalPorDono(idDono) {
    const link=`${url}/${versao}/laika/animais/cliente/${id}`
    const response=await fetch(link)
    const data= await response.json()
    return data.animal
}

export async function postAnimal(animal) {
    const link=`${url}/${versao}/laika/animal`
    const options={
        method:`POST`,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(animal)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function putAnimal(animal,id) {
    const link=`${url}/${versao}/laika/animal/${id}`
    const options={
        method:`PUT`,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(animal)
    }
    const response=await fetch(url,options)
    return response.ok
}
export async function deleteAnimal(id) {
    const link=`${url}/${versao}/laika/animal/${id}`
    const options={
        method:`DELETE`
    }
    const response=await fetch(url,options)
    return response.ok
}