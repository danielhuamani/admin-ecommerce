<template>
  <div class="row">
    <div class="col-12">
      <form class="row" @submit.prevent='saveData'>

        <div class="col-12 mb-20">
          <div class="card">
            <div class="card-header">
              <h5 class="card-header__title">Información</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" v-model='user.password' class='form-control' :class='{"form-control--errors": hasError("password")}'>
                    <div class="form-group__errors">
                      <p v-for='err in getError("password")'>{{err}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Nueva Contraseña</label>
                    <input type="password" v-model='user.new_password' class='form-control' :class='{"form-control--errors": hasError("new_password")}'>
                     <div class="form-group__errors">
                      <p v-for='err in getError("new_password")'>{{err}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="">Confirmar Contraseña</label>
                    <input type="password" v-model='user.confirm_password' class='form-control' :class='{"form-control--errors": hasError("confirm_password")}'>
                    <div class="form-group__errors">
                      <p v-for='err in getError("confirm_password")'>{{err}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group__errors">
                    <p v-for='err in getError("non_field_errors")'>{{err}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <router-link :to='{ name: "profile"}' class='btn btn-dark'>Regresar </router-link>
              <div class="button-group">
                <button class='btn btn-success'> Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import Bus from '@/bus'
  import { mapMutations } from 'vuex'
  import errorsDJ from '@/mixins/errorsDJ'
  export default {
    name: 'ChangePass',
    mixins: [errorsDJ],
    data () {
      return {
        user: {
          password: '',
          new_password: '',
          confirm_password: ''
        }
      }
    },
    created () {
      this.setNameMenu('Cambiar Contraseña')
    },
    methods: {
      ...mapMutations([
        'setNameMenu'
      ]),
      saveData () {
        const self = this
        this.axios({
          method: 'put',
          url: '/user-change-pass/',
          data: self.user
        }).then(response => {
          self.user = response.data
          Bus.$emit('message_bus', 'success', 'Se guardo correctamente', true)
          self.$router.push({name: 'profile'})
        }).catch(error => {
          self.errors = error.response.data
          Bus.$emit('message_bus', 'danger', 'Hubo un error', false)
        })
      }
    }
  }
</script>