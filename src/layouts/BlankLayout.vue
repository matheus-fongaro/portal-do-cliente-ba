<template>
  <div>
<!--    <Loader />-->
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlankLayout',
  components: {
  },
  mounted () {
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
  .modal-backdrop {
    opacity: .5;
  }
</style>
