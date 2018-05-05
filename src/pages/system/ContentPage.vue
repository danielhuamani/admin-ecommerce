<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <div class="content-page" :class="{'content-page--active': getIsMenu}">
       <HeaderPage></HeaderPage>
       <div class="content-view">
       <transition name="fade" mode="out-in" >
          <div class=" row" v-if='isMessage'>
            <div class="col-12 ">
              <div class="message " :class='"message--" + status'>
                <h4 class='message__title'>{{message}}</h4>
                <div class="message__close" @click='isMessage=false'>
                  <i class="fa fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        </transition>
         <transition name="fade" mode="out-in" appear class='container-fluid'>
            <router-view ></router-view>
          </transition>
       </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/bus'
import { mapGetters } from 'vuex'
import Sidebar from '@/componentsGlobals/Sidebar'
import HeaderPage from '@/componentsGlobals/HeaderPage'
export default {
  name: 'ContentPage',
  data () {
    return {
      isMessage: false,
      status: '',
      message: '',
      changePage: false,
      countPage: 0
    }
  },
  components: {
    Sidebar,
    HeaderPage
  },
  methods: {

  },
  mounted () {
    const self = this
    Bus.$on('message_bus', (status, message, changePage) => {
      self.message = message
      self.status = status
      self.isMessage = true
      self.changePage = changePage
      if (self.changePage) {
        self.countPage = self.countPage + 1
      } else {
        self.countPage = 0
      }
    })
  },
  computed: {
    ...mapGetters([
      'getIsMenu'
    ])
  },
  beforeRouteUpdate (to, from, next) {
    if (this.changePage) {
      if (this.countPage >= 2) {
        this.isMessage = false
        this.countPage = 0
      }
    } else {
      this.isMessage = false
      this.countPage = 0
      this.changePage = false
    }
    this.countPage = this.countPage + 1
    next()
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
    width: calc(100% - 220px);
    margin-left: 220px;
    transition: 0.3s ease all;
    background: #F0F1F5;
    &--active{
      width: calc(100% - 100px);
      margin-left: 100px;
    }
    .content-view{

      padding: 20px 15px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
