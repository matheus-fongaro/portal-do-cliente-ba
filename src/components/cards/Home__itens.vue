<template>
  <div class="card-body">
    <ul class="list-inline p-0 m-0">
      <li class="d-flex align-items-center justify-content-between pb-3 border-bottom">
        <div class="icon mm-icon-box event-icon bg-primary rounded-small font-size-18 mr-0">
          <div class="date">{{dia}}</div>
          <div class="month">{{mes | transformaEmTexto}}</div>
        </div>
        <div class="event-info ml-3">
          <h5>#Pedido</h5>
          <p class="mb-0 text">{{nPedido}}</p>
        </div>
        <div class="card-header-toolbar d-flex align-items-center">
                <button
                   @click="abrirPedido(nPedido, dataPedido, valor, dataFat)"
                  class="btn btn-primary view-more"
                >Detalhes</button>
              </div>
      </li>
    </ul>
  </div>
</template>

<script>
import dataFilters from '@/mixins/dataFilters'
import mixins from '@/mixins/fetchPedidos'

export default {
  name: 'home.itens',
  mixins: [dataFilters, mixins],
  props: {
    nPedido: Number,
    dataPedido: String,
    valor: Number,
    usuario: Number,
    status: String,
    dataFat: String
  },
  data(){
    var dataF = new Date(this.dataPedido)
    let dia = dataF.getUTCDate()
    let mes = dataF.getUTCMonth() + 1
    return{
      dia, mes, dataF
    }
  }
}
</script>

<style scoped>

</style>