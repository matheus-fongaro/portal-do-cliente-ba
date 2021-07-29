<template>
  <div class="container-fluid container-md">
    <titulo-card />
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <titulo-pagina :titulo="tituloDaPagina"/>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TituloCard from '@/components/partials/frontend/TituloCard'
import TituloPagina from '@/components/partials/frontend/TituloPagina'

export default {
  components: {
    TituloCard,
    TituloPagina
  },
  props:{
    tituloDaPagina: String
  }
}
</script>