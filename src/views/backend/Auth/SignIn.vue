<template>
  <section class="login-content">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <div class="auth-logo">
                <img
                  src="@/assets/images/logo-azul.png"
                  class="img-fluid rounded-normal"
                  alt="logo"
                >
              </div>
              <h2 class="mb-2 text-center">Entrar</h2>
              <p class="text-center">Para ver suas informações de faturamento, entre com seu e-mail e senha.</p>
              <form @submit.prevent="fazerLogin">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-model="email"
                        class="form-control"
                        type="email"
                        placeholder="email@exemplo.com"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Senha</label>
                      <input
                        v-model="senha"
                        class="form-control"
                        type="password"
                        placeholder="********"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <router-link
                      :to="{name: 'auth.recover-password'}"
                      class="text-primary float-left"
                    >Esqueceu sua senha?</router-link>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div></div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                  >Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import firebase from 'firebase/app'
export default {
  name: 'SignIn',
  data(){

    return{
      email: '',
      senha: '',
      lembrar: false
    }
  },
  methods: {
    fazerLogin(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
        .then(() => {
          this.$router.push({ name: 'principais.home' })
        })

        .catch((erro) => {
          alert(erro)
        })
    },
  }
}
</script>