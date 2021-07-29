<template>
   <footer class="mm-footer">
    <div class="container-fluid">
        <div class="row">
            <!-- <div class="col-lg-6">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item"><router-link :to="{name: 'app.privacypolicy'}">Política de privacidade</router-link></li>
                    <li class="list-inline-item"><router-link :to="{name: 'app.Termsofuse'}">Termos de uso</router-link></li>
                </ul>
            </div> -->

            <div class="col-lg-12 text-center">
                Copyright 2021© <a href="https://www.bernardoalimentos.com.br" target="_blank">Bernardo Alimentos</a> Todos os direitos reservados.
            </div>
        </div>
    </div>
</footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:"Footer",
    prop:{
    },
    computed : {
        ...mapGetters({
            appName: 'appName'
        })
    }
}
</script>