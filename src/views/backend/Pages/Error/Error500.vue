<template>
    <div class="container">
         <b-row class=" no-gutters height-self-center">
            <b-col sm="12" class=" text-center align-self-center">
               <div class="mm-error position-relative">
                     <img src="../../../../assets/images/error/500-dark.png" class="img-fluid mm-error-img" alt="">
                     <h2 class="mb-0">Erro ao carregar os dados.</h2>
                     <p>Erro interno do servidor, tente novamente mais tarde.</p>
                     <router-link class="btn btn-primary d-inline-flex align-items-center mt-3" :to="{name: 'principais.home'}"><i class="ri-home-4-line"></i>Voltar a tela inicial</router-link>
               </div>
            </b-col>
         </b-row>
   </div>
</template>
<script>
export default {
    name:'Error500'
}
</script>