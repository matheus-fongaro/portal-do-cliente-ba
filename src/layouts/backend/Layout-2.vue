<template>
  <div>
    <Loader/>
    <div class="wrapper  bg-h-full l-horizontal overflow-hidden">
      <HeaderStyle2/>
      <div class="content-page c-payment-block">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
    </div>
    <FooterStyle />
  </div>
</template>
<script>
import {core} from "@/config/pluginInit"
import Loader from '@/components/loader/Loader'
import HeaderStyle2 from "@/components/partials/backend/HeaderStyle/HeaderStyle2";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
export default {
  name: 'Layout-1',
  components: {
    HeaderStyle2,
    FooterStyle,
    Loader
  },
 mounted () {
    document.body.classList='hospi-wrapper'
    core.iconanimate()
  },
  destroyed () {
    document.body.classList='hospi-wrapper'
  }
}
</script>
<style>
</style>
