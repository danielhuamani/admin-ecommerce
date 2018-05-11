<template>
  <div class="sidebar" :class="{'sidebar--active': getIsMenu}">
    <a href="" class='sidebar__logo'>
      <img src="../assets/img/logo.svg" class='sidebar__logo__img' alt="" width="80">
    </a>
    <div class="sidebar__menu">
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard'}" class="sidebar__menu__link" active-class="sidebar__menu__link--active">
            <i class="sidebar__menu__icon fa fa-home"></i>
            <p class='sidebar__menu__text'>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'order_list'}" class="sidebar__menu__link" active-class="sidebar__menu__link--active">
            <i class="sidebar__menu__icon fa fa-truck"></i>
            <p class='sidebar__menu__text'>Mis Pedidos</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'product_list'}" class="sidebar__menu__link" active-class="sidebar__menu__link--active">
            <i class="sidebar__menu__icon fa fa-shopping-cart"></i>
            <p class='sidebar__menu__text'>Mis Productos</p>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'getIsMenu'
    ])
  }
}
</script>
<style lang='scss'>
  @import "~styles/abstract/variables";
  .sidebar{
    $root: &;
    width: 220px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    box-sizing: border-box;
    transition: 0.3s ease all;
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    background-color: $color_background;
    &--active{
      width: 90px;
      #{$root}__menu__text{
        transform: translate3d(-25px,0,0);
        opacity: 0;
      }
      #{$root}__menu__icon{
        margin-left:5px;
      }
    }
    &__logo{
      display: block;
      margin: 15px 0px;
      &__img{
        margin: auto;
        display: block;
      }
    }
    &__menu{
      $root: &;
      margin-top: 60px;
      color: $color_text_menu;
      &__icon{
        font-size: 22px;
        transition: 0.3s ease all;
        display: inline-block;
        width: 30px;
      }
      &__link{
        padding: 8px 20px;
        display: block;
        white-space: nowrap;
        color: $color_text_menu;
        border-left: 4px solid transparent;
        transition: 0.2s ease all;
        &--active{
          border-left: 4px solid $color_main;
          #{$root}__text{
            color: $color_main;
          }
          #{$root}__icon{
            color: $color_main;
          }
        }
        &:hover{
          border-left: 4px solid $color_main;
          #{$root}__text{
            color: $color_main;
          }
          #{$root}__icon{
            color: $color_main;
          }
        }
      }
      &__text{
        margin: 0;
        transition: 0.3s ease all;
        margin-left: 10px;
        color: $color_text_menu;
        font-family: $font_main;
        transform: translateZ(0);
        opacity: 1;
        position: relative;
        display: inline-block;
      }
    }
  }
  @media screen and (max-width: 960px)  {
    .sidebar{
      $root: &;
      left: -1000px;
      &--active{
        left: 0px;
        width: 90px;
        #{$root}__menu__text{
          transform: translate3d(-25px,0,0);
          opacity: 0;
        }
        #{$root}__menu__icon{
          margin-left:5px;
        }
      }
    }
  }
</style>
