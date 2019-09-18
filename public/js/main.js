window.onload = () => {
  getPessoas()
}

function getInputValues () {
  const pessoa = {
    name: document.getElementById('name').value,
    email: document.getElementById('password').value,
    password: document.getElementById('password').value
  }

  return JSON.stringify(pessoa)
}

function getPessoas () {
  $.get('http://localhost:3333/pessoa', (data, status) => {
    populatePessoasListWith(data)
  })
}

function createPessoa () {
  const pessoaData = getInputValues()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3333/pessoa',
    contentType: 'application/json',
    data: pessoaData,
    sucess: (data, status) => console.log(data),
    dataType: 'json'
  }).done(data => {
    getPessoas()
  })
}

function populatePessoasListWith (pessoas) {
  const pessoasHTMLItems = pessoas.map(pessoa => {
    const id = pessoa._id
    const htmlString = `
    <li>
      <p>Nome: ${pessoa.name ? pessoa.name : 'Não cadastrado'}</p>
      <p>Email: ${pessoa.email ? pessoa.email : 'Não cadastrado'}</p>
      <p>Senha: ${pessoa.password ? pessoa.password : 'Não cadastrado'}</p>
      <button id="${pessoa._id}" class="deleteButton">Deletar</button>
    </li>`
    return htmlString
  })

  $('#pessoasList').empty().html(pessoasHTMLItems)

  $('.deleteButton').on('click', function (e) {
    deletePessoaWith(e.target.id)
  })
}

function deletePessoaWith (id) {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3333/pessoa?id=${id}`,
    contentType: 'application/json',
    sucess: (data, status) => console.log(status)
  }).done((data) => {
    getPessoas()
  })
}
