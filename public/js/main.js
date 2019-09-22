window.onload = () => {
  getPessoas()
  $('#modal').hide()
}

let pessoasArr = {}

function getInputValues () {
  const pessoa = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  return JSON.stringify(pessoa)
}

function getUpdateInputValues () {
  const pessoa = {
    name: document.getElementById('nameToUpdate').value,
    email: document.getElementById('emailToUpdate').value,
    password: document.getElementById('passwordToUpdate').value
  }

  return JSON.stringify(pessoa)
}

function getPessoas () {
  $.get('http://localhost:3333/pessoa', (data, status) => {
    pessoasArr = data
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
    <li class="pessoaCard">
      <div class="inputDiv">
        <label class="labelTitle">Nome</label>
        <p>${pessoa.name ? pessoa.name : 'Não cadastrado'}</p>
      </div>
      <div class="inputDiv">
        <label class="labelTitle">Email</label>
        <p>${pessoa.email ? pessoa.email : 'Não cadastrado'}</p>
      </div>
      <div class="inputDiv">
        <label class="labelTitle">Senha</label>
        <p>${pessoa.password ? pessoa.password : 'Não cadastrado'}</p>
      </div>
      <div class="buttonDiv">
        <button id="${pessoa._id}" class="deleteButton dangerButton">Deletar</button>
        <button id="${pessoa._id}" class="updateButton confirmButton">Editar</button>
      </div>
    </li>`
    return htmlString
  })

  $('#pessoasList').empty().html(pessoasHTMLItems)

  $('.deleteButton').on('click', function (e) {
    deletePessoaWith(e.target.id)
  })

  $('.updateButton').on('click', function (e) {
    updatePessoa(e.target.id)
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

function updatePessoa (id) {
  const pessoaToEdit = pessoasArr.filter(pessoa => pessoa._id === id)[0]
  presentModalWith(pessoaToEdit)
}

function presentModalWith (pessoa) {
  const htmlString = `
    <h3 class="sectionTitle">Editar pessoa</h3>
    <div class="inputDiv">
      <label>Nome:</label>
      <input type="text" value=${pessoa.name} id="nameToUpdate"></input>
    </div>
    <div class="inputDiv">
      <label>Email:</label>
      <input type="text" value=${pessoa.email} id="emailToUpdate"></input>
    </div>
    <div class="inputDiv">
      <label>Senha:</label>
      <input type="text" value=${pessoa.password} id="passwordToUpdate"></input>
    </div>
    <div class="buttonDiv">
      <button class="cancelUpdate dangerButton">Cancelar</button>
      <button class="updatePessoa confirmButton" id=${pessoa._id}>Editar</button>
    </div>
   
  `
  $('#modal').empty().html(htmlString).show()

  $('.cancelUpdate').on('click', function (e) {
    $('#modal').hide()
  })

  $('.updatePessoa').on('click', function (e) {
    const pessoaToUpdate = getUpdateInputValues()
    const id = e.target.id
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3333/pessoa?id=${id}`,
      contentType: 'application/json',
      data: pessoaToUpdate,
      sucess: (data, status) => console.log(status)
    }).done((data) => {
      $('#modal').hide()
      getPessoas()
    })
  })
}
