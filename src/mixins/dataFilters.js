
export default {
  filters: {
    criaData: function (data) {
      let arrayData = data.split('-')
      let dataObj = new Date(Date.UTC(arrayData[0], parseInt(arrayData[1]) -1 , arrayData[2], 5, 0, 0, 0))
      let dataFormatada = new Intl.DateTimeFormat('pt-BR').format(dataObj)
      return dataFormatada
    },
    valorFormatado: function (valor) {
      let a = new Intl.NumberFormat('pt-BR')
      return a.format(valor)
    },
    transformaEmTexto: function(value){
      switch (value) {
        case 1:
          return 'Jan'
        case 2: 
          return 'Fev'
        case 3: 
          return 'Mar'
        case 4:
          return 'Abr'
        case 5:
          return 'Mai'
        case 6:
          return 'Jun'
        case 7:
          return 'Jul'
        case 8:
          return 'Ago'
        case 9:
          return 'Set'
        case 10:
          return 'Out'
        case 11:
          return 'Nov'
        case 12:
          return 'Dez'
      
        default:
          return 'Mês inválido'
      }
    }
  },
  methods: {
    calcularDias(data){
      let hoje = new Date().toISOString().slice(0,10)

      let diaHoje = new Date(hoje)
      let diaVencimento = new Date(data)

      let diasAtraso = (diaHoje - diaVencimento)/(1000*60*60*24)

      return diasAtraso
    }
  }
}