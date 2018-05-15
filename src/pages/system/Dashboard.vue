<template>
  <div class="row">
  <!--   <div class="col-6">
      <div class="card">
        <div class="card-header">
            <h5 class="card-header__title">Mis Ultimos Pedidos</h5>
        </div>
        <div class="card-body">
            <div class="row row_order" :key='order' v-for='order in row_orders'>
                <div class="col-6">
                    <a href=""> <span>N° {{order}}</span></a>
                </div>
                <div class="col-3">
                    <span>S/ 200.00</span>
                </div>
                <div class="col-3">
                    <span>04/04/2018</span>
                </div>
            </div>

        </div>
      </div>
    </div> -->
    <MySales></MySales>
    <OrderCount></OrderCount>

  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import MySales from '@/components/MySales'
import OrderCount from '@/components/OrderCount'
export default {
  name: 'Dashboard',
  components: {
    MySales,
    OrderCount
  },
  created () {
    this.setNameMenu('Dashboard')
  },
  data () {
    return {
      dashboard: {},
      load: false
    }
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
  }
}
</script>
<style lang='scss'>
  .row_order{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .row_order:last-child{
    margin-bottom: 0;
  }
</style>
