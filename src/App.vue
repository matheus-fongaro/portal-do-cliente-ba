<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  @import "./assets/scss/backend.scss";
  @import "./assets/css/custom.css";
</style>
<style>

.clickable {
  text-decoration: underline;
}
.clickable:hover{
  cursor: pointer;
}
</style>