<template>
  <div class="mt-5 mm-maintenance">
    <div class="container-fluid p-0">
      <b-row class=" no-gutters">
        <b-col
          sm="12"
          class="text-center"
        >
          <div class="mm-maintenance">
            <img
              src="../../../assets/images/error/maintenance.png"
              class="img-fluid"
              alt=""
            >
            <h3 class="mt-4 mb-1">O nosso site está em manutenção!</h3>
            <p>Por favor volte mais tarde</p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="container mt-3">
      <b-row>
        <b-col lg="4">
          <card class=" text-center">
            <template v-slot:body>
              <i class="ri-window-line ri-4x line-height text-primary"></i>
              <h5 class="card-title mt-1">Por que o site está fora do ar?</h5>
              <p class="mb-0">Se trata de uma manutenção programada ou uma falha no sistema, nos acompanhe em nossas redes para saber mais informações.</p>
              <p class="mb-0"></p>
            </template>
          </card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Maintainance'
}
</script>
