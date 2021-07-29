<template>
  <LayoutComTabela :tituloDaPagina="this.$options.name">
    <data-table v-if="!isEmpty">
      <VueElementLoading
        :active="!isLoaded"
        spinner="bar-fade-scale"
        text="Carregando"
        color="#4788FF"
      />
      <template #thead>
        <th>Duplicata</th>
        <th>Pedido</th>
        <th>Emissão</th>
        <th>Vencimento</th>
        <th>Dias em Atraso</th>
        <th>Juros</th>
        <th>Valor Original</th>
        <th>Ação</th>
      </template>
      <template #tbody>
        <tr
          v-for="(título, index) in títulos"
          v-bind:key="index"
        >
          <td>{{título.duplicata}}</td>
          <td
            class="clickable text-primary"
            @click="abrirPedido(título.pedido, título.dataEmissao, título.vlrTotalNF, título.dataEmissao)"
            data-toggle="tooltip" data-placement="top" title="Clique para ver o pedido"
          >
            {{título.pedido}}
          </td>
          <td>{{título.dataEmissao | criaData}}</td>
          <td>{{título.dataVenc | criaData}}</td>
          <td>{{(calcularDias(título.dataVenc))}}</td>
          <td>R${{título.vlrJuros | valorFormatado}}</td>
          <td>R${{título.vlrTitulo | valorFormatado}}</td>
          <td><button
              class="btn btn-success btn-sm mr-2"
              v-b-modal.pagamentoModal
            >Efetuar Pagamento</button></td>
        </tr>
      </template>
    </data-table>
    <div
      v-else
      class="col-lg-12"
    >
      <div class="card bg-success-light">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-4 pr-2">
              <div class="bg-success h-100 rounded">
                <div class="ratting-icons">
                  <i class="ri-emotion-happy-line"></i>
                </div>
              </div>
            </div>
            <div class="col-8 pt-3 pb-3">
              <p>Você não tem duplicatas em aberto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-pix id="pagamentoModal" />
  </LayoutComTabela>
</template>

<script>
import ModalPix from '@/components/partials/frontend/ModalPix.vue'
import DataTable from '@/views/backend/Table/DataTable.vue'
import LayoutComTabela from '@/components/partials/frontend/LayoutComTabela.vue'
import mixins from '@/mixins/fetchPedidos'
import dataFilters from '@/mixins/dataFilters'
import { core } from '@/config/pluginInit'
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Títulos',
  mixins: [mixins, dataFilters],
  components: {
    ModalPix,
    DataTable,
    LayoutComTabela,
    VueElementLoading
  },
  data () {
    let codCliente = localStorage.codCliente
    let dataEmissao = new Array
    let dataVencimento = new Array

    return {
      codCliente,
      títulos: null,
      dataEmissao,
      dataVencimento,
      opt: [0, 'asc'],
      isLoaded: false,
      isEmpty: null
    }
  },
  methods: {
    buscaItens () {
      let parâmetros = {
        codCliente: localStorage.codCliente,
        size: 999,
        endpoint: '/pedidos/titulos-abertos'
      }
      this.fetchPedidos(parâmetros)
        .then((resultados) => {
          if (resultados.data.results.length == 0) {
            this.isEmpty = true
          } else {
            this.títulos = resultados.data.results
          }
        })
        .then(() => {
          this.isLoaded = true
          if (this.isEmpty == null) {
            core.initDataTableOpt(this.opt)
          }
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  },
  mounted () {
    this.buscaItens()
  }
}
</script>
