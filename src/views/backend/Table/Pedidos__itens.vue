<template>
  <data-table>
    <template #thead>
      <th>Pedido</th>
      <th>Data de Emissão</th>
      <th>Valor</th>
      <th>Situação</th>
      <th>Ação</th>
    </template>
    <template #tbody>
      <tr
        v-for="(pedido, index) in pedidos"
        v-bind:key="index"
      >
        <td>{{pedido.codPedido}}</td>
        <td>{{pedido.dataEmissao | criaData}}</td>
        <td class="mb-0 text-danger">R${{pedido.valorTotalOriginal | valorFormatado}}</td>
        <td><span class="mt-2 badge badge-success">{{pedido.situacao}}</span></td>
        <th><button
            @click="abrirPedido(pedido.codPedido, pedido.dataEmissao, pedido.valorTotalOriginal, pedido.dataPrevisaoFat)"
            type="button"
            class="btn btn-primary btn-sm mr-2"
          >Detalhes</button></th>
      </tr>
    </template>
  </data-table>
</template>

<script>
import { core } from '@/config/pluginInit'
import mixins from '@/mixins/fetchPedidos'
import dataFilters from '@/mixins/dataFilters'
import DataTable from './DataTable.vue'



export default {
  name: 'pedidos.itens',
  mixins: [mixins, dataFilters],
  components: {
    DataTable
  },
  data () {
    return {
      dataFormatada: null,
      data: null,
      pedidos: null,
      opt: [0, 'desc']
    }
  },
  methods: {
    pegaPedidos () {
      let parâmetros = {
        size: 999,
        codCliente: localStorage.codCliente,
        endpoint: '/pedidos/listar'
      }
      this.fetchPedidos(parâmetros)
        .then((resultados) => {
          this.pedidos = resultados.data.results
        })
        .then(() => {
          core.initDataTableOpt(this.opt)
        })
        .catch((erro) => {
          console.log(erro)
        })
    },
  },
  mounted () {
    this.pegaPedidos()
  }
}
</script>