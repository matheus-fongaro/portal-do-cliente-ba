import axios from 'axios'
import { core } from '@/config/pluginInit'
import firebase from 'firebase/app'

export default {
  methods: {
    // função que faz a requisição na api e retorna uma array com os resultados
    // passa-se o caminho do endpoint (sem o caminho da API, essa já está na configuração global do axios)
    // e os parâmetros de busca, como descrito no objeto params abaixo
    fetchPedidos: async (parâmetros) => {
      let token = await firebase.auth().currentUser.getIdToken(true)
      return axios.get(parâmetros.endpoint, {
        headers: {
        'Authorization': 'Bearer '.concat(token),
        },
        params: {
          filter: parâmetros.filter || "",
          page: parâmetros.page || 0,
          size: parâmetros.size || 25,
          sort: parâmetros.sort || "",
          codCliente: parâmetros.codCliente || "",
          codPedido: parâmetros.codPedido || ""
        }
      });
    },
    abrirPedido (codPedido, dataEmissao, valorOriginal, dataPrevisaoFat) {
      let payload = {
        codPedido: codPedido,
        dataEmissao: dataEmissao,
        valor: valorOriginal,
        dataFaturamento: dataPrevisaoFat
      }
      localStorage.setItem('pedido', JSON.stringify(payload))
      core.closeDataTable()
      this.$router.push({ name: 'pedidos.verPedidos' })
    }
  }
}