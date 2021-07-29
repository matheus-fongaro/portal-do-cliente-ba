<template>
  <div class="container-fluid container-md" id="printable">
    <div class="row">
      <div class="col-lg-12">
        <div class="card mm-mb-12">
          <div class="card-body">
            <h2 class="card-title">{{nomeCliente}}</h2>
            <h4 class="card-title">Pedido: {{pedidoInfo.codPedido}}</h4>
            <div class="list-group list-group-flush">
              <div class="list-group-item">Valor do Pedido: R${{pedidoInfo.valor | valorFormatado}}</div>
              <div class="list-group-item">Data de Emissão: {{pedidoInfo.dataEmissao | criaData}}</div>
              <div class="list-group-item">Data de Faturamento: {{pedidoInfo.dataFaturamento | criaData}} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <VueElementLoading
            :active="!isLoaded"
            spinner="bar-fade-scale"
            text="Carregando os dados do pedido"
            color="#4788FF"
             />
          <data-table>
            <template #thead>
              <th scope="col">Item</th>
              <th scope="col">cod item</th>
              <th scope="col">Produto</th>
              <th scope="col">Un</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor Unt</th>
              <th scope="col">Valor Total</th>
            </template>
            <template #tbody>
              <tr
                v-for="(item, index) in itens"
                v-bind:key="index"
              >
                <th scope="row">{{index + 1}}</th>
                <td>{{item.codProduto}}</td>
                <td>{{item.descProdutoSaida}}</td>
                <td>{{item.unidadeMedida}}</td>
                <td>{{item.qtdPedida}}</td>
                <td>R${{item.valorUnitario | valorFormatado}}</td>
                <td>R${{item.valorFaturado | valorFormatado}}</td>
              </tr>
            </template>
          </data-table>
          <button class="btn btn-primary small" type="button" @click="print">Imprimir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { core } from '@/config/pluginInit'
import mixins from '@/mixins/fetchPedidos'
import dataFilters from '@/mixins/dataFilters'
import DataTable from './DataTable.vue'
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'pedidos.verPedidos',
  mixins: [mixins, dataFilters],
  components: {
    DataTable,
    VueElementLoading
  },
  data () {
    // a tela é carregada de acordo com o que está na store
    // antes de mandar o usuário para essa tela, fazer o dispatch com o código do pedido
    let pedidoInfo = JSON.parse(localStorage.getItem('pedido'))
    let nomeCliente = localStorage.nomeCliente
    // stringify e parse para os itens da store 

    return {
      pedidoInfo,
      nomeCliente,
      itens: null,
      isLoaded: false
    }
  },
  methods: {
    fetchItens () {
      let parâmetros = {
        codPedido: this.pedidoInfo.codPedido,
        size: 999,
        endpoint: '/pedidos/itens-pedido'
      }
      this.fetchPedidos(parâmetros)
        .then((resultados) => {
          this.itens = resultados.data.results
        })
        .then(() => {
          this.isLoaded = true
          core.initDataTable()
        })
        .catch((erro) => {
          console.log(erro)
        })
    },
    print(){
      this.$htmlToPaper('printable')
    }
  },
  mounted () {
    this.fetchItens()
  }
}
</script>