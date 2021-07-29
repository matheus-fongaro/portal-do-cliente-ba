<template>
  <div class="card-header d-flex justify-content-between">
    <div class="header-title">
      <h4 class="card-title">{{titulo}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    titulo: String
  }
}
</script>