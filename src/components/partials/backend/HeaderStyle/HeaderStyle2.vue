<template>
  <div class="header-style-1 mm-top-navbar">
    <div class="container-fluid container-md mm-navbar-custom">
      <nav class="navbar c-navbar navbar-expand-lg navbar-light px-0">
        <div
          class="mm-navbar-logo d-flex align-items-center justify-content-between"
          @click="miniSidebar"
        >
          <i class="ri-menu-line wrapper-menu"></i>
          <router-link :to="{name: 'principais.home'}"> <img
              :src="logo"
              class="img-fluid rounded-normal"
              alt="logo"
            > </router-link>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <div class="menu-horizontal">
            <nav class="mm-sidebar-menu">
              <div class="mm-sidebar-logo d-flex align-items-center justify-content-between">
                <router-link
                  :to="{name: 'principais.home'}"
                  class="header-logo"
                > <img
                    :src="sidelogo"
                    class="img-fluid rounded-normal light-logo"
                    alt="logo"
                  > </router-link>
                <div
                  class="side-menu-bt-sidebar"
                  @click="miniSidebar"
                > <i class="las la-bars wrapper-menu"></i> </div>
              </div>
              <ul
                id="mm-sidebar-toggle"
                class="side-menu d-flex"
              >
                <li class="active">
                  <router-link :to="{name: 'principais.home'}">
                    <svg
                      id="mm-dash"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home svg-icon"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 14 15 14 15 22"></polyline>
                    </svg>
                    <span class="ml-2">Início</span>
                  </router-link>
                </li>
                <li class="active">
                  <a
                    v-b-toggle.Dashboards
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      class="svg-icon"
                      id="mm-auth-1"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h20zm0-2H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4zm-7 8v2h4v-2h-4z"
                      />
                    </svg> <span class="ml-2">Títulos</span> <i class="ri-arrow-right-s-line mm-arrow-right"></i> </a>
                  <b-collapse
                    tag="ul"
                    id="Dashboards"
                    class="mm-submenu sub-scrll"
                    data-parent="#mm-sidebar-toggle"
                    v-hover
                  >
                <li>
                  <router-link
                    :to="{name: 'principais.titulos'}"
                    class="svg-icon"
                  > <i>
                      <svg
                        class="svg-icon"
                        id="mm-auth-1-1"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 6H8v2h9l-5-5v3zm-5 4l5 5v-3h4v-2H7z"
                        />
                      </svg>
                    </i> <span>Em Aberto</span> </router-link>
                </li>
                <li>
                  <router-link
                    :to="{name: 'principais.titulos-pagos'}"
                    class="svg-icon"
                  > <i>
                      <svg
                        class="svg-icon"
                        id="mm-auth-1-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.5 11v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"
                        />
                      </svg>
                    </i> <span>Pagos</span> </router-link>
                </li>
                </b-collapse>
                </li>
                <li>
                  <router-link to="Pedidos">
                    <svg
                      class="svg-icon"
                      id="mm-dash-1"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg> <span class="ml-2">Pedidos</span>
                  </router-link>
                </li>
                <li class=" ">
                  <a
                    v-b-toggle.auth
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      class="svg-icon"
                      id="mm-auth-1"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg> <span class="ml-2">Conta</span> <i class="ri-arrow-right-s-line mm-arrow-right"></i> </a>
                  <b-collapse
                    tag="ul"
                    id="auth"
                    class="mm-submenu sub-scrll"
                    data-parent="#mm-sidebar-toggle"
                    v-hover
                  >
                <li>
                  <router-link
                    :to="{ name: 'auth.recover-password'}"
                    class="svg-icon"
                  > <i class="">
                      <svg
                        class="svg-icon"
                        id="mm-auth-1-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      </svg>
                    </i> <span>Mudar a senha</span> </router-link>
                </li>
                <li>
                  <a
                    @click="logOut"
                    class="svg-icon"
                  > <i>
                      <svg
                        class="svg-icon"
                        id="mm-auth-1-1"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </i> <span>Sair</span> </a>
                </li>
                </b-collapse>
                </li>
              </ul>
            </nav>
          </div>
          <div class="d-flex align-items-center">
            <ModeSwitch />
            <Fullscreen color="white" />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { core } from '@/config/pluginInit'
import Fullscreen from '../../../fullscreen/Fullscreen'
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: "HeaderStyle2",
  components: { Fullscreen },
  mounted () {
    core.scroll();
  },
  computed: {
    ...mapGetters({
      logo: 'darklogo',
      sidelogo: 'logo',
    })
  },
  methods: {
    miniSidebar () {
      core.triggerSet()
    },
    logOut () {
      localStorage.clear()
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'auth.login' })
        })
        .catch((erro) => {
          alert(erro)
        })

    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>