<template>
  <div class="page-login">
    <div class="container-fluid page-login__background">
      <div class="row page-login__row">
        <div class="page-login__container card">
          <div class="page-login__header">
            <h3 class='page-login__header__title'>Ingresar</h3>
          </div>

          <form action="" v-on:submit.prevent="loginSubmit" class="page-login__form">
            <div class="alert alert-danger" v-if="existError">
              <div class="header" v-if="errorLogin.email.length > 0">
                <p class="alert__header">email</p>
                <ul class="alert__list">
                  <li v-for="error_email in errorLogin.email">
                    {{error_email}}
                  </li>
                </ul>
              </div>
              <div class="header" v-if="errorLogin.password.length > 0">
                <p class="alert__header">password</p>
                <ul class="alert__list">
                  <li v-for="error_password in errorLogin.password">
                    {{error_password}}
                  </li>
                </ul>
              </div>
              <div class="header" v-if="errorLogin.non_field_errors.length > 0">
                <ul class="alert__list">
                  <li v-for="error_non_field_errors in errorLogin.non_field_errors">
                    {{error_non_field_errors}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input type="text"  class="form-control" v-model="login.email">
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="password" v-model="login.password"  class="form-control">
            </div>
            <button class='btn btn-primary page-login__btn'>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {setTokenData} from '@/utils/auth'
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      errorLogin: {
        email: [],
        password: [],
        non_field_errors: []
      }
    }
  },
  methods: {
    loginSubmit () {
      const self = this
      this.axios.post('/token-auth/', self.login)
        .then((response) => {
          let token = response.data.token
          setTokenData(token)
          self.$router.push({name: 'dashboard'})
        })
        .catch((error) => {
          if (error.response.data) {
            if (error.response.data.email) {
              self.$set(self.errorLogin, 'email', error.response.data.email)
            } else {
              self.$set(self.errorLogin, 'email', [])
            }
            if (error.response.data.email) {
              self.$set(self.errorLogin, 'password', error.response.data.password)
            } else {
              self.$set(self.errorLogin, 'password', [])
            }
            if (error.response.data.non_field_errors) {
              self.$set(self.errorLogin, 'non_field_errors', error.response.data.non_field_errors)
            } else {
              self.$set(self.errorLogin, 'non_field_errors', [])
            }
          }
        })
    }
  },
  computed: {
    existError () {
      console.log(this.errorLogin.email, this.errorLogin.password)
      return this.errorLogin.email.length > 0 || this.errorLogin.password.length > 0 || this.errorLogin.non_field_errors.length > 0
    }
  }
}
</script>
<style lang="scss">
  .page-login{
    &__header{
        margin: 20px 0;
      &__title{
        text-align:center;
      }
    }
    &__btn{
      display:block;
      margin: auto;
    }
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
      background-image: url('../../assets/img/tienda-online.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &:after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
      background-color: rgba(0,0,0,0.8);
    }
    &__row{
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    &__container{
      position: relative;
      z-index: 100;
      background-color: white;
      padding: 15px 20px;
    }
    &__form{
      width: 300px;
      max-width: 350px;
    }

  }
</style>
