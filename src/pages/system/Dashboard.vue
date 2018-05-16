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
    <div class="col-12">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-header__title text-center">
                Ingresos Mensual
              </h3>
            </div>
            <div class="card-body">
              <h1 class='card-body__dashboard_title text-center'> S/ {{dashboard.total_sales_month}}</h1>
              <p class='card-body__dashboard_description text-center'>{{dashboard.month}}</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-header__title text-center">
                Ingreso Diario
              </h3>
            </div>
            <div class="card-body">
              <h1 class='card-body__dashboard_title text-center'> S/ {{dashboard.total_sales_date}}</h1>
              <p class='card-body__dashboard_description text-center'>{{dashboard.day}}</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
          <div class="card-header">
              <h3 class="card-header__title text-center">
                Pedidos Mensual
              </h3>
            </div>
            <div class="card-body">
              <h1 class='card-body__dashboard_title text-center'>{{dashboard.total_order_month}}</h1>
              <p class='card-body__dashboard_description text-center'>{{dashboard.month}}</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-header__title text-center">
                Total de Productos
              </h3>
            </div>
            <div class="card-body">
              <h1 class='card-body__dashboard_title text-center'>{{dashboard.total_product}}</h1>
              <p class='card-body__dashboard_description text-center'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    this.getDashboard()
  },
  data () {
    return {
      dashboard: {
        total_sales_month: 0,
        total_sales_date: 0,
        total_order_month: 0,
        total_product: 0
      },
      load: true
    }
  },
  methods: {
    ...mapMutations([
      'setNameMenu'
    ]),
    getDashboard () {
      const self = this
      this.axios({
        method: 'get',
        url: '/dashboard/'
      }).then(response => {
        self.dashboard = response.data
      })
    }
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
