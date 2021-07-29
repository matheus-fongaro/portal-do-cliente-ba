<template>
  <div>
    <div class="container-fluid container-md">
      <div class="row">
        <div class="col-lg-12 mb-3">
          <div class="d-flex align-items-center justify-content-between welcome-content">
            <div class="navbar-breadcrumb">
              <h4 class="mb-1">{{nomeCliente}}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-if="estaAtrasado"
          class="col-lg-12"
        >
          <div class="card bg-danger-light">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-4 pr-2">
                  <div class="bg-danger h-100 rounded">
                    <div class="ratting-icons">
                      <i class="ri-emotion-sad-line"></i>
                    </div>
                  </div>
                </div>
                <div class="col-8 pt-3 pb-3">
                  <p>Você tem duplicatas vencidas.</p>
                  <router-link to="Titulos">
                    <h6 class="mb-0"><u>Clique aqui para ver detalhes</u></h6>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-block card-stretch card-height">
            <div class="card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="card-title">Ultimos Pedidos</h4>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <button
                  @click="verMais"
                  class="btn btn-outline-primary view-more"
                >
                  Ver Mais
                </button>
              </div>
            </div>
            <div
              v-for="(pedido, index) in pedidos"
              :key="index"
            >
              <Itens
                :nPedido=pedido.codPedido
                :dataPedido=pedido.dataEmissao
                :valor=pedido.valorTotalOriginal
                :usuario=pedido.codCliente
                :status=pedido.situacao
                :dataFat=pedido.dataPrevisaoFat
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import Itens from '@/components/cards/Home__itens'
import mixins from '@/mixins/fetchPedidos.js'

export default {
  name: 'Home',
  mixins: [mixins],
  components: {
    Itens
  },
  mounted () {
    this.buscaUsuario()
      .then(() => {
        // chamada da requisição de pedidos
        this.buscaVencida()
      })
      .then(() => {
        this.fetchPed()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.$forceUpdate()
      })

  },
  data () {
    let codCliente = localStorage.codCliente || null
    let nomeCliente = localStorage.nomeCliente || null
    let estaAtrasado = null

    return {
      codCliente, nomeCliente, estaAtrasado,
      pedidos: [],
    }
  },
  methods: {
    async buscaUsuario () {
      if (this.codCliente) {
        this.nomeCliente = localStorage.nomeCliente
        this.codCliente = localStorage.codCliente
      } else {
        let db = firebase.firestore().collection("usuarios")
        let query = db.where("email", "==", firebase.auth().currentUser.email)
        query.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              this.codCliente = doc.data().codCliente
              localStorage.codCliente = doc.data().codCliente
              this.nomeCliente = doc.data().nome
              localStorage.nomeCliente = doc.data().nome
            })
          })
          .catch(err => {
            console.log(`Erro ao buscar usuário: ${err}`)
          })
      }
    },
    fetchPed () {
      let payload = {
        codCliente: this.codCliente,
        size: 5,
        endpoint: '/pedidos/listar'
      }
      this.fetchPedidos(payload)
        .then((resultado) => {
          this.pedidos = resultado.data.results
        })
    },
    async buscaVencida () {
      let payload = {
        codCliente: this.codCliente,
        endpoint: '/pedidos/em-aberto'
      }
      this.fetchPedidos(payload)
        .then((resultado) => {
          if (resultado.data.result == 0) {
            this.estaAtrasado = false
          } else {
            this.estaAtrasado = true
          }
        })
    },
    verMais () {
      this.$router.push({ name: 'principais.pedidos' })
    }
  }
}
</script>