<template>
  <b-modal :id="id">
    <template #modal-header >
      <slot name="header"></slot>
    </template>
    <slot name="body"></slot>
    <template #modal-footer>
      <slot name="footer"></slot>
    </template>
  </b-modal>
</template>
<script>
export default {
  props: {
    id: String
  }
}
</script>