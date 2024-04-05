//Input
const inNome = document.getElementById("inNome")
const inIdade = document.getElementById("inIdade")
//Actions
const btnAdicionar = document.getElementById("btnAdicionar")
const btnListar = document.getElementById("btnListar")
const btnOrdenar = document.getElementById("btnOrdenar")
//Output
const outLista = document.getElementById("outLista")

const criancas = []


const adicionarCrianca = () => {
 const nome = inNome.value
 const idade = Number(inIdade.value)

 if(nome === '' || idade === 0 || isNaN(idade)){
     alert("Digite os valores corretos")
     return
 }
criancas.push({nome: nome, idade: idade})
 console.log(criancas)
 inNome.value = ''
 inIdade.value = ''
}

btnAdicionar.addEventListener("click", adicionarCrianca)

const listarCrianca = () => {
 if(criancas.length == 0){
     alert('Não há crianças no sistema')
     return    
 }
 let lista = ''
criancas.forEach((crianca) =>{
     return lista += `${crianca.nome} - ${crianca.idade}\n`
 })
 console.log(lista)
 outLista.textContent = lista
}
 btnListar.addEventListener('click', listarCrianca)

  const OrdenarPorIdade = () => {

  const ordem = criancas.sort((a,b) => {
   return a.idade - b.idade
  })

  console.log(ordem)

  let lista = ''
   criancas.forEach((criancas) => {
       return (lista += `${criancas.nome} - ${criancas.idade}\n`)
   })
 
  outLista.textContent = lista
 }
  btnOrdenar.addEventListener('click', OrdenarPorIdade)
