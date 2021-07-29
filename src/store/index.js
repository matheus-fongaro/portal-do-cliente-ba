import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: 'Área de Clientes',
    logo: require('../assets/images/logo.png'),
    darklogo:require('../assets/images/logo.png'),
    dark: false,
    namespaced: true,
    codCliente: localStorage.codCliente,
    nomeCliente: localStorage.nomeCliente,

    pedido: localStorage.getItem('pedido')
  },
  mutations: {
    layoutModeCommit (state, payload) {
      state.dark = payload
      if (!payload) {
        state.logo = require('../assets/images/logo.png')
      } else {
        state.logo = require('../assets/images/white-logo.png')
      }
    },
    alteraCliente(state, payload){
      localStorage.codCliente = payload.codCliente
      localStorage.nomeCliente = payload.nomeCliente
    },
    alteraPedido(state, payload){
      //
    }
  },
  actions: {
    layoutModeAction (context, payload) {
      context.commit('layoutModeCommit', payload.dark)
    },
    getCliente(context){
      let db = firebase.firestore().collection("usuarios")
      let query = db.where("email", "==", firebase.auth().currentUser.email)
      let payload = {}
      query.get()
        .then(snapShot => {
          snapShot.forEach(doc => {
            payload.codCliente = doc.data().codCliente
            payload.nomeCliente = doc.data().nome
          })
          context.commit('alteraCliente', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setPedido(context, payload){
      context.commit('alteraPedido', payload)
    }
  },
  getters: {
    appName: state => { return state.appName },
    logo: state => { return state.logo },
    darklogo: state => { return state.darklogo },
    image1: state => { return state.user.image },
    name: state => { return state.user.name },
    image2:state => { return state.user.image2},
    image3:state => { return state.user.image3},
    dark: state => { return state.dark },
    codCliente: state => { return state.codCliente},
    nomeCliente: state => { return state.nomeCliente},
    pedidoInfo: state => { return state.pedido }
  },
  modules: {
  }
})
