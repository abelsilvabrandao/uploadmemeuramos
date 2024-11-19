function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img//
  const img = document.querySelector("#profile img")
  // substituir a imagem//
  if (html.classList.contains("light")) {
    //se tiver light mod adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-memeu-light.png")
    //se tiver sem light mod mantem a imagem
  } else {
    img.setAttribute("src", "./assets/avatar-memeu.png")
  }
}

function openForm() {
  var modal = document.getElementById("form-modal")
  modal.style.display = "block"
}

function closeForm() {
  var modal = document.getElementById("form-modal")
  modal.style.display = "none"
}

// Função para formatar o telefone
function formatarTelefone(telefone) {
  // Remove todos os caracteres que não são dígitos
  telefone = telefone.replace(/\D/g, "")

  // Limita o telefone a 11 caracteres (incluindo o formato de telefone)
  telefone = telefone.slice(0, 11)

  // Formatação do telefone: (xx) xxxxx-xxxx
  return telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
}

// Adiciona um ouvinte de evento de entrada ao campo de telefone
document
  .getElementById("contactPhone")
  .addEventListener("input", function (event) {
    // Obtém o valor atual do campo de telefone
    let telefone = event.target.value

    // Formata o telefone
    telefone = formatarTelefone(telefone)

    // Define o valor formatado de volta no campo de telefone
    event.target.value = telefone
  })

// Obter o elemento <span> pelo ID
var spanAno = document.getElementById("ano-atual")

// Obter o ano atual
var anoAtual = new Date().getFullYear()

// Atualizar o conteúdo do <span> com o ano atual
spanAno.textContent = anoAtual

// Obtenha o elemento textarea
const textarea = document.getElementById("eventDescription")

// Adicione um ouvinte de evento de entrada ao textarea
textarea.addEventListener("input", function (event) {
  const maxLength = 2000 // Limite máximo de caracteres
  const currentLength = event.target.value.length // Comprimento atual do texto

  if (currentLength === 1000) {
    alert(
      "Você atingiu 1000 caracteres. Continue digitando ou clique em OK para continuar."
    )
  } else if (currentLength === maxLength) {
    alert(
      "Você atingiu o limite máximo de 2000 caracteres. Não é possível adicionar mais texto."
    )
  }
})

function enviarViaWhatsapp() {
  // Obtém os valores dos campos do formulário
  var nomeEvento = document.getElementById("eventName").value
  var enderecoEvento = document.getElementById("eventAddress").value
  var telefoneContato = document.getElementById("contactPhone").value
  var emailContato = document.getElementById("contactEmail").value
  var descricaoEvento = document.getElementById("eventDescription").value

  // Formata a mensagem para o WhatsApp
  var mensagem = `Nome do Evento: ${nomeEvento}%0AEndereço do Evento: ${enderecoEvento}%0ATelefone para Contato: ${telefoneContato}%0AE-mail de Contato: ${emailContato}%0ADescrição do Evento: ${descricaoEvento}`

  // URL do WhatsApp
  var urlWhatsApp = `https://wa.me/5571996377281?text=${mensagem}`

  // Redireciona para o WhatsApp
  window.open(urlWhatsApp, "_blank")

  // Limpa os campos do formulário após o envio
  document.getElementById("eventName").value = ""
  document.getElementById("eventAddress").value = ""
  document.getElementById("contactPhone").value = ""
  document.getElementById("contactEmail").value = ""
  document.getElementById("eventDescription").value = ""
}
