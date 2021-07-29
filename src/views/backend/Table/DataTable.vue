<template>
  <div class="card-body">
    <div class="table-responsive">
      <table
        id="datatable"
        class="table data-table table-striped table-bordered"
      >
        <thead>
          <tr>
            <slot name="thead"></slot>
          </tr>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import { core } from '@/config/pluginInit'
export default {
  destroyed () {
    core.closeDataTable()
  }
}
</script>
<style scoped>
.modal-footer {
  padding: 0;
  border: none;
}
tbody>tr {
  text-align: center;
}
</style>