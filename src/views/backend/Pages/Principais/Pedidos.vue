<template>
  <layout-com-tabela :tituloDaPagina="this.$options.name" >
      <Itens />
  </layout-com-tabela>
</template>

<script>
import Itens from '@/views/backend/Table/Pedidos__itens'
import LayoutComTabela from '@/components/partials/frontend/LayoutComTabela'

export default {
  name: 'Pedidos',
  components: {
    Itens,
    LayoutComTabela
  },
  mounted(){
  }
}
</script>