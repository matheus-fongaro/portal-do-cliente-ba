<template>
  <section class="login-content">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <div class="auth-logo">
                <img
                  src="@/assets/images/logo.png"
                  class="img-fluid rounded-normal"
                  alt="logo"
                >
              </div>
              <h2 class="mb-2 text-center">Redefinir a senha</h2>
              <p class="text-center">Insira seu endereço de email para receber as instruções de redefinição de senha.</p>
              <form @submit.prevent="onSubmit()">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder="email@exemplo.com"
                        v-model="email"
                        required
                      >
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                >Enviar</button>
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
import 'firebase/auth'

export default {
  name: 'RecoverPassword',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    onSubmit () {
      firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
          // não faz nada msm
        })
        // eslint-disable-next-line no-unused-vars
        .catch((erro) => {
          // faz um tratamento fake só pra não aparecer no console (padrão)
        })
        .finally(() => {
          // não tem tratamento de erros para não vazar informações
          // manda direto para a página de sucesso, tendo encontrado um email ou não
          this.$router.replace({ name: 'auth.confirm-mail' })
        })
    }
  }
}
</script>