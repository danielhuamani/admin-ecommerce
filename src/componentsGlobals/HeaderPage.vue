<template>
  <header class='header d-flex justify-content-between align-items-center'>
    <div class="header__menu d-flex" >
      <i class="header__menu__icon fa fa-bars" @click='changeIsMenu'></i>
      <h5 class='header__menu__name'> Productos</h5>
    </div>
    <div class="header__content_user">
      <div class="header__content_user__user d-flex">
        <i class='header__content_user__icon fa fa-user'></i>
        <h5 class='header__content_user__name'>Daniel Huamani  </h5>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HeaderPage',
  methods: {
    ...mapActions([
      'changeIsMenu'
    ])
  },
  computed: {
    ...mapGetters([
      'getIsMenu'
    ])
  }
}
</script>
<style lang='scss'>
  @import "~styles/abstract/variables";
  .header{
    height: 60px;
    padding: 10px 15px;
    background: white;
    border-bottom: 1px solid $color_border;
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
