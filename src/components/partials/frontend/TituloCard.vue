<template>
  <div class="row">
    <div class="col-lg-12 mb-3">
      <div class="d-flex align-items-center justify-content-between welcome-content">
        <div class="navbar-breadcrumb">
          <h4 class="mb-1">{{nome}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nome: null
    }
  },
  mounted(){
    this.nome = localStorage.nomeCliente
  }
}
</script>
