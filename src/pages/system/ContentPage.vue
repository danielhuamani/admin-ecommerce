<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <div class="content-page" :class="{'content-page--active': getIsMenu}">
       <HeaderPage></HeaderPage>
       <div class="content-view">
         <transition name="fade" mode="out-in" appear class='container-fluid'>
            <router-view ></router-view>
          </transition>
       </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Sidebar from '@/componentsGlobals/Sidebar'
import HeaderPage from '@/componentsGlobals/HeaderPage'
export default {
  name: 'ContentPage',
  components: {
    Sidebar,
    HeaderPage
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
  .wrapper{
    background-color: #F0F1F5;
    height:100%;
  }
  .content-page{
    position: relative;
    width: calc(100% - 250px);
    margin-left: 250px;
    transition: 0.3s ease all;
    background: #F0F1F5;
    &--active{
      width: calc(100% - 100px);
      margin-left: 100px;
    }
    .content-view{

      padding: 30px 15px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
