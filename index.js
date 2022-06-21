//variaveis
//dados de entrada
//dados de saida
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntat = document.querySelector("#buttonPerguntar")
const respostas = [
  "Grande Muralha da China",
  "Petra",
  "Coliseu",
  "Chichen Itzá",
  "Machu Picchu",
  "Taj Mahal",
  "Cristo Redentor",
]


function qualConhecer() {

  if (inputPergunta.value == "") {
    alert("Digite seu dia preferido!")
    return 
    //o return vai parar a função sem gerar respostas
  }

  buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
  const totalRespostas = respostas.length 
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  //sumir a resposta depois de 3s
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}


