<template>
  <layout-com-tabela :tituloDaPagina="this.$options.name">
    <data-table>
      <template #thead>

        <th>Duplicata</th>
        <th>Pedido</th>
        <th>Vencimento</th>
        <th>Pagamento</th>
        <th>Portador</th>
        <th>Tipo de Pagamento</th>
        <th>Juros</th>
        <th>Valor Original</th>
        <th>Valor Pago</th>
      </template>
      <template #tbody>
        <tr
          v-for="título in títulos"
          v-bind:key="título.duplicata"
        >
          <td>{{título.duplicata}}</td>
          <td class="clickable text-primary" 
          @click="abrirPedido(título.pedido, título.dataEmissao, título.vlrTotalNF, título.dataEmissao)"
          data-toggle="tooltip" data-placement="top" title="Clique para ver o pedido"
          >
              {{título.pedido}} 
          </td>
          <td>{{título.dataVencimento | criaData}}</td>
          <td>{{título.dataEmissao | criaData}}</td>
          <td>{{título.portador}}</td>
          <td>{{título.tipoPagamento}}</td>
          <td class="mb-0 text-danger">R${{título.vlrJuros | valorFormatado}}</td>
          <td class="mb-0 text-success">R${{título.vlrTitulo | valorFormatado}}</td>
          <td class="mb-0 text-success">R${{(título.vlrTitulo + título.vlrJuros) | valorFormatado}}</td>
        </tr>
      </template>
    </data-table>
  </layout-com-tabela>
</template>

<script>
import LayoutComTabela from '@/components/partials/frontend/LayoutComTabela.vue'
import DataTable from '@/views/backend/Table/DataTable'
import { core } from '@/config/pluginInit'
import mixins from '@/mixins/fetchPedidos'
import dataFilters from '@/mixins/dataFilters'

export default {
  components: {
    LayoutComTabela,
    DataTable
  },
  mixins: [mixins, dataFilters],
  name: 'Títulos pagos',
  data () {
    return {
      opt: [1, 'desc'],
      títulos: null
    }
  },
  mounted () {
    let payload = {
      codCliente: localStorage.codCliente,
      size: 99999,
      endpoint: '/pedidos/titulos-pagos'
    }
    this.fetchPedidos(payload)
      .then((resultados) => {
        this.títulos = resultados.data.results
      })
      .then(() => {
        core.initDataTableOpt(this.opt)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>