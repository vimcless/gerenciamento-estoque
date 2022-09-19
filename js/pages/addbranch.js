"use strict"
function findAddress(){
  if (cep.value.trim().length !== 8) {return false;}
  fetch(`http://viacep.com.br/ws/${cep.value}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro){return false;}
street.value = data.logradouro;
district.value = data.bairro;
city.value = data.localidade;
state.value = data.uf;
    });
}
function addbranch(){
  return`<h1>Adicionar filial</h1>
  <div class="row justify-content-md-center">
  <div class="col col-3"></div>
  <form action="" class="col-6">
  <label for="name">Nome</label>
  <input type="text" name="" id="name" class="form-control mb-3">
  <label for="fiscalcode">CNPJ</label>
  <input type="text" name="" id="fiscalcode" class="form-control mb-3">
  <label for="cep">CEP</label>
  <input onblur="findAddress()" type="text" name="" id="cep" class="form-control mb-3">
  <label for="street">Logradouro</label>
  <input type="text" name="" id="street" class="form-control mb-3">
  <label for="number">Número</label>
  <input type="text" name="" id="number" class="form-control mb-3">
  <label for="district">Bairro</label>
  <input type="text" name="" id="district" class="form-control mb-3">
  <label for="city">Cidade</label>
  <input type="text" name="" id="city" class="form-control mb-3">
  <label for="state">Estado</label>
  <input type="text" name="" id="state" class="form-control mb-3">
  <div class="d-grid"><button class="btn btn-primary btn-lg">Pronto</button></div>
</form>
<div class="col col-3"></div>
</div>`}