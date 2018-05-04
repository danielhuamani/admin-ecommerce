<template>
  <header class='header d-flex justify-content-between align-items-center'>
    <div class="header__menu d-flex" >
      <i class="header__menu__icon fa fa-bars" @click='changeIsMenu'></i>
      <h5 class='header__menu__name'> {{getNameMenu}}</h5>
    </div>
    <div class="header__content_user btn-group ">
      <div class="header__content_user__user d-flex" @click='show=!show'>
        <i class='header__content_user__icon fa fa-user'></i>
        <h5 class='header__content_user__name'>{{name}}</h5>
      </div>
      <transition name="fade">
        <div @click='show=!show' class="dropdown-menu dropdown-menu-right show" v-if='show'>
          <router-link :to="{name:'profile'}" class="dropdown-item">
            <i class='fa fa-user-circle'></i> Mi Perfil
          </router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click.prevent='logout' href="#"><i class='fa fa-sign-out-alt'></i> Cerrar sesión</a>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import {getName, authLogout} from '@/utils/auth'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HeaderPage',
  data () {
    return {
      name: '',
      show: false
    }
  },
  mounted () {
    this.name = getName()
  },
  methods: {
    ...mapActions([
      'changeIsMenu'
    ]),
    logout () {
      authLogout()
      this.$router.push({name: 'login'})
    },
  },
  computed: {
    ...mapGetters([
      'getIsMenu',
      'getNameMenu'
    ])
  }
}
</script>
<style lang='scss'>
  @import "~styles/abstract/variables";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .header{
    height: 60px;
    padding: 10px 15px;
    background: white;
    border-bottom: 1px solid $color_border;
    .dropdown-menu{
      left: inherit !important;
      right: 0;
      margin-top: 20px;
      padding: 0;
      a{
        padding: 10px 20px;
      }
      .dropdown-divider{
        margin:0;
      }
    }
    &__menu{
      line-height: 15px;
      cursor: pointer;
      &__icon{
        font-size: 24px;
      }
      &__name{
        margin-left: 15px;
      }
    }
    &__content_user{
      $root: &;
      transition: 0.3s ease all;
      cursor: pointer;
      &__user{
        &:hover{
          #{$root}__name{
              color: $color_text_black;
          }
          #{$root}__icon{
            color: $color_text_black;
          }
        }
      }
      &__icon{
        font-size: 22px;
        color: $color_text_menu;
      }
      &__name{
        margin-left:  8px;
        font-family: $font_main;
        color: $color_text_menu;
      }
    }
  }
</style>
